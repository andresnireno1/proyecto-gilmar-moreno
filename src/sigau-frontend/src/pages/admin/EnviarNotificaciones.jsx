import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

export default function EnviarNotificaciones() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ mensaje: '', tipo: 'ACADEMICA', estudiante: { idEstudiante: 1 } });
  const [enviando, setEnviando] = useState(false);
  const [exito, setExito] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    setError('');
    setExito('');
    try {
      await api.post('/notificaciones', form);
      setExito('Notificación enviada correctamente.');
      setForm({ mensaje: '', tipo: 'ACADEMICA', estudiante: { idEstudiante: 1 } });
    } catch (err) {
      setError('No se pudo enviar la notificación.');
    }
    setEnviando(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-800 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">SIGAU</h1>
        <button onClick={() => navigate('/admin')} className="bg-white text-blue-800 px-3 py-1 rounded text-sm hover:bg-gray-100">
          Volver
        </button>
      </nav>

      <div className="p-6 max-w-lg mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Enviar Notificación</h2>

        {exito && <div className="bg-green-100 text-green-800 px-4 py-3 rounded mb-4">✅ {exito}</div>}
        {error && <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4">{error}</div>}

        <div className="bg-white rounded-lg shadow p-6">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">ID Estudiante</label>
              <input
                type="number"
                value={form.estudiante.idEstudiante}
                onChange={(e) => setForm({ ...form, estudiante: { idEstudiante: parseInt(e.target.value) } })}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Tipo</label>
              <select
                value={form.tipo}
                onChange={(e) => setForm({ ...form, tipo: e.target.value })}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              >
                <option value="ACADEMICA">ACADEMICA</option>
                <option value="URGENTE">URGENTE</option>
                <option value="GENERAL">GENERAL</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Mensaje</label>
              <textarea
                value={form.mensaje}
                onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                rows={4}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500 resize-none"
                placeholder="Escribe el mensaje de la notificación..."
                required
              />
            </div>
            <button
              type="submit"
              disabled={enviando}
              className="bg-blue-800 text-white py-2 rounded hover:bg-blue-900 transition disabled:opacity-50"
            >
              {enviando ? 'Enviando...' : 'Enviar Notificación'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}