import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

export default function GestionAulas() {
  const navigate = useNavigate();
  const [aulas, setAulas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');
  const [exito, setExito] = useState('');
  const [mostrarForm, setMostrarForm] = useState(false);
  const [guardando, setGuardando] = useState(false);
  const [form, setForm] = useState({ codigo: '', capacidad: '', estado: 'DISPONIBLE', piso: { idPiso: 1 } });

  useEffect(() => {
    cargarAulas();
  }, []);

  const cargarAulas = async () => {
    try {
      const response = await api.get('/aulas');
      setAulas(response.data);
    } catch (err) {
      setError('No se pudieron cargar las aulas.');
    }
    setCargando(false);
  };

  const handleGuardar = async (e) => {
    e.preventDefault();
    setGuardando(true);
    try {
      await api.post('/aulas', { ...form, capacidad: parseInt(form.capacidad) });
      setExito('Aula creada correctamente.');
      setMostrarForm(false);
      setForm({ codigo: '', capacidad: '', estado: 'DISPONIBLE', piso: { idPiso: 1 } });
      cargarAulas();
    } catch (err) {
      setError('No se pudo crear el aula.');
    }
    setGuardando(false);
  };

  const handleEliminar = async (id) => {
    if (!confirm('¿Estás seguro de eliminar esta aula?')) return;
    try {
      await api.delete(`/aulas/${id}`);
      setExito('Aula eliminada correctamente.');
      cargarAulas();
    } catch (err) {
      setError('No se pudo eliminar el aula.');
    }
  };

  const estadoColor = (estado) => {
    if (estado === 'DISPONIBLE') return 'bg-green-100 text-green-800';
    if (estado === 'OCUPADA') return 'bg-red-100 text-red-800';
    return 'bg-yellow-100 text-yellow-800';
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
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Gestionar Aulas</h2>
          <button
            onClick={() => setMostrarForm(!mostrarForm)}
            className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900 transition"
          >
            {mostrarForm ? 'Cancelar' : '+ Nueva Aula'}
          </button>
        </div>

        {exito && <div className="bg-green-100 text-green-800 px-4 py-2 rounded mb-4">{exito}</div>}
        {error && <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4">{error}</div>}

        {mostrarForm && (
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h3 className="font-bold text-gray-800 mb-4">Nueva Aula</h3>
            <form onSubmit={handleGuardar} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 text-sm mb-1">Código</label>
                <input
                  type="text"
                  value={form.codigo}
                  onChange={(e) => setForm({ ...form, codigo: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  placeholder="Ej: A101"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-1">Capacidad</label>
                <input
                  type="number"
                  value={form.capacidad}
                  onChange={(e) => setForm({ ...form, capacidad: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  placeholder="Ej: 40"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-1">Estado</label>
                <select
                  value={form.estado}
                  onChange={(e) => setForm({ ...form, estado: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                >
                  <option value="DISPONIBLE">DISPONIBLE</option>
                  <option value="OCUPADA">OCUPADA</option>
                  <option value="MANTENIMIENTO">MANTENIMIENTO</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-1">ID Piso</label>
                <input
                  type="number"
                  value={form.piso.idPiso}
                  onChange={(e) => setForm({ ...form, piso: { idPiso: parseInt(e.target.value) } })}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={guardando}
                  className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-900 transition disabled:opacity-50"
                >
                  {guardando ? 'Guardando...' : 'Guardar'}
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-4 py-3 text-left text-gray-700">Código</th>
                <th className="px-4 py-3 text-left text-gray-700">Capacidad</th>
                <th className="px-4 py-3 text-left text-gray-700">Estado</th>
                <th className="px-4 py-3 text-left text-gray-700">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cargando ? (
                <tr><td colSpan={4} className="px-4 py-3 text-center text-gray-400">Cargando...</td></tr>
              ) : aulas.map((a) => (
                <tr key={a.idAula} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-800">{a.codigo}</td>
                  <td className="px-4 py-3 text-gray-600">{a.capacidad} estudiantes</td>
                  <td className="px-4 py-3">
                    <span className={`text-xs px-2 py-1 rounded-full ${estadoColor(a.estado)}`}>{a.estado}</span>
                  </td>
                  <td className="px-4 py-3">
                    <button onClick={() => handleEliminar(a.idAula)} className="text-red-600 hover:text-red-800 text-xs">
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}