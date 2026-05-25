import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

export default function MisMaterias() {
  const navigate = useNavigate();
  const [materias, setMaterias] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const cargarMaterias = async () => {
      try {
        const response = await api.get('/asignaciones');
        setMaterias(response.data);
      } catch (err) {
        setError('No se pudieron cargar las materias.');
      }
      setCargando(false);
    };
    cargarMaterias();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-800 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">SIGAU</h1>
        <button onClick={() => navigate('/docente')} className="bg-white text-blue-800 px-3 py-1 rounded text-sm hover:bg-gray-100">
          Volver
        </button>
      </nav>

      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Mis Materias</h2>

        {cargando && <p className="text-gray-500">Cargando materias...</p>}
        {error && <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4">{error}</div>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {materias.map((a) => (
            <div key={a.idAsignacion} className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-400">
              <h3 className="font-bold text-gray-800 text-lg mb-2">{a.materia?.nombre}</h3>
              <p className="text-sm text-gray-600">Código: {a.materia?.codigo}</p>
              <p className="text-sm text-gray-600">Aula: {a.aula?.codigo}</p>
              <p className="text-sm text-gray-600">Día: {a.dia}</p>
              <p className="text-sm text-gray-600">Horario: {a.horaInicio} - {a.horaFin}</p>
            </div>
          ))}
          {!cargando && materias.length === 0 && (
            <p className="text-gray-400 col-span-3 text-center">No hay materias asignadas.</p>
          )}
        </div>
      </div>
    </div>
  );
}