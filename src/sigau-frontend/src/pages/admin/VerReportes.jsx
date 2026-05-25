import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

export default function VerReportes() {
  const navigate = useNavigate();
  const [reportes, setReportes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');
  const [exito, setExito] = useState('');

  useEffect(() => {
    cargarReportes();
  }, []);

  const cargarReportes = async () => {
    try {
      const response = await api.get('/reportes');
      setReportes(response.data);
    } catch (err) {
      setError('No se pudieron cargar los reportes.');
    }
    setCargando(false);
  };

  const estadoColor = (estado) => {
    if (estado === 'PENDIENTE') return 'bg-yellow-100 text-yellow-800';
    if (estado === 'EN_PROCESO') return 'bg-blue-100 text-blue-800';
    return 'bg-green-100 text-green-800';
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-800 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">SIGAU</h1>
        <button onClick={() => navigate('/admin')} className="bg-white text-blue-800 px-3 py-1 rounded text-sm hover:bg-gray-100">
          Volver
        </button>
      </nav>

      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Reportes de Soporte</h2>

        {exito && <div className="bg-green-100 text-green-800 px-4 py-2 rounded mb-4">{exito}</div>}
        {error && <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4">{error}</div>}

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-4 py-3 text-left text-gray-700">ID</th>
                <th className="px-4 py-3 text-left text-gray-700">Descripción</th>
                <th className="px-4 py-3 text-left text-gray-700">Estado</th>
                <th className="px-4 py-3 text-left text-gray-700">Fecha</th>
                <th className="px-4 py-3 text-left text-gray-700">Estudiante</th>
              </tr>
            </thead>
            <tbody>
              {cargando ? (
                <tr><td colSpan={5} className="px-4 py-3 text-center text-gray-400">Cargando...</td></tr>
              ) : reportes.length === 0 ? (
                <tr><td colSpan={5} className="px-4 py-3 text-center text-gray-400">No hay reportes.</td></tr>
              ) : reportes.map((r) => (
                <tr key={r.idReporte} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-600">{r.idReporte}</td>
                  <td className="px-4 py-3 text-gray-800">{r.descripcion}</td>
                  <td className="px-4 py-3">
                    <span className={`text-xs px-2 py-1 rounded-full ${estadoColor(r.estado)}`}>{r.estado}</span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">{new Date(r.fechaReporte).toLocaleString('es-CO')}</td>
                  <td className="px-4 py-3 text-gray-600">{r.estudiante?.nombre}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}