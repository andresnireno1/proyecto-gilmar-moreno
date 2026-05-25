import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

export default function Notificaciones() {
  const navigate = useNavigate();
  const [notificaciones, setNotificaciones] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const cargarNotificaciones = async () => {
      try {
        const response = await api.get('/notificaciones');
        setNotificaciones(response.data);
      } catch (err) {
        setError('No se pudieron cargar las notificaciones.');
      }
      setCargando(false);
    };
    cargarNotificaciones();
  }, []);

  const tipoColor = (tipo) => {
    if (tipo === 'ACADEMICA') return 'bg-blue-100 text-blue-800 border-blue-300';
    if (tipo === 'URGENTE') return 'bg-red-100 text-red-800 border-red-300';
    return 'bg-gray-100 text-gray-800 border-gray-300';
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
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Notificaciones</h2>

        {cargando && <p className="text-gray-500">Cargando notificaciones...</p>}
        {error && <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4">{error}</div>}

        {!cargando && notificaciones.length === 0 && (
          <div className="bg-white rounded-lg shadow p-6 text-center text-gray-400">
            No tienes notificaciones por el momento.
          </div>
        )}

        <div className="flex flex-col gap-3">
          {notificaciones.map((n) => (
            <div key={n.idNotificacion} className={`bg-white rounded-lg shadow p-4 border-l-4 ${tipoColor(n.tipo)}`}>
              <div className="flex justify-between items-start">
                <p className="font-medium text-gray-800">{n.mensaje}</p>
                <span className={`text-xs px-2 py-1 rounded-full border ${tipoColor(n.tipo)}`}>{n.tipo}</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">{new Date(n.fechaEnvio).toLocaleString('es-CO')}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}