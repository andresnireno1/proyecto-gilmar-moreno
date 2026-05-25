import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

export default function MiHorario() {
  const navigate = useNavigate();
  const [asignaciones, setAsignaciones] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');

  const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

  useEffect(() => {
    const cargarHorario = async () => {
      try {
        const response = await api.get('/asignaciones');
        setAsignaciones(response.data);
      } catch (err) {
        setError('No se pudo cargar el horario.');
      }
      setCargando(false);
    };
    cargarHorario();
  }, []);

  const asignacionesPorDia = (dia) => {
    return asignaciones.filter(a => a.dia?.toLowerCase() === dia.toLowerCase());
  };

  const colorDia = (dia) => {
    const colores = {
      'Lunes': 'border-blue-400 bg-blue-50',
      'Martes': 'border-green-400 bg-green-50',
      'Miercoles': 'border-purple-400 bg-purple-50',
      'Jueves': 'border-yellow-400 bg-yellow-50',
      'Viernes': 'border-red-400 bg-red-50',
      'Sabado': 'border-orange-400 bg-orange-50',
    };
    return colores[dia] || 'border-gray-400 bg-gray-50';
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-800 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">SIGAU</h1>
        <button onClick={() => navigate('/estudiante')} className="bg-white text-blue-800 px-3 py-1 rounded text-sm hover:bg-gray-100">
          Volver
        </button>
      </nav>

      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Mi Horario</h2>

        {cargando && <p className="text-gray-500">Cargando horario...</p>}
        {error && <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4">{error}</div>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {dias.map((dia) => (
            <div key={dia} className={`bg-white rounded-lg shadow border-l-4 ${colorDia(dia)}`}>
              <div className="px-4 py-3 border-b border-gray-100">
                <h3 className="font-bold text-gray-800">{dia}</h3>
              </div>
              <div className="p-4">
                {asignacionesPorDia(dia).length === 0 ? (
                  <p className="text-gray-400 text-sm">Sin clases</p>
                ) : (
                  asignacionesPorDia(dia).map((a) => (
                    <div key={a.idAsignacion} className="mb-3 last:mb-0">
                      <p className="font-medium text-gray-800 text-sm">{a.materia?.nombre}</p>
                      <p className="text-xs text-gray-500">Aula: {a.aula?.codigo}</p>
                      <p className="text-xs text-gray-500">{a.horaInicio} - {a.horaFin}</p>
                      <p className="text-xs text-gray-400">Docente: {a.materia?.docente?.nombre}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}