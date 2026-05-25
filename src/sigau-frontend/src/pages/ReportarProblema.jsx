import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

export default function ReportarProblema() {
  const navigate = useNavigate();
  const [descripcion, setDescripcion] = useState('');
  const [enviando, setEnviando] = useState(false);
  const [exito, setExito] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    setError('');
    try {
      await api.post('/reportes', {
        descripcion,
        estado: 'PENDIENTE',
        estudiante: { idEstudiante: 1 }
      });
      setExito(true);
      setDescripcion('');
    } catch (err) {
      setError('No se pudo enviar el reporte. Intenta nuevamente.');
    }
    setEnviando(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-800 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">SIGAU</h1>
        <button onClick={() => navigate('/estudiante')} className="bg-white text-blue-800 px-3 py-1 rounded text-sm hover:bg-gray-100">
          Volver
        </button>
      </nav>

      <div className="p-6 max-w-lg mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Reportar Problema</h2>

        {exito && (
          <div className="bg-green-100 text-green-800 px-4 py-3 rounded mb-4">
            ✅ Reporte enviado correctamente. El equipo de soporte lo revisará pronto.
          </div>
        )}

        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4">{error}</div>
        )}

        <div className="bg-white rounded-lg shadow p-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Descripción del problema
              </label>
              <textarea
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                rows={5}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500 resize-none"
                placeholder="Describe el problema que encontraste..."
                required
              />
            </div>

            <button
              type="submit"
              disabled={enviando}
              className="w-full bg-blue-800 text-white py-2 rounded hover:bg-blue-900 transition disabled:opacity-50"
            >
              {enviando ? 'Enviando...' : 'Enviar Reporte'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}