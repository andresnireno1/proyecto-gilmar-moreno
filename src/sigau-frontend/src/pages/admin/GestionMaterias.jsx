import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

export default function GestionMaterias() {
  const navigate = useNavigate();
  const [materias, setMaterias] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');
  const [exito, setExito] = useState('');
  const [mostrarForm, setMostrarForm] = useState(false);
  const [guardando, setGuardando] = useState(false);
  const [form, setForm] = useState({ nombre: '', codigo: '', docente: { idDocente: 1 } });

  useEffect(() => {
    cargarMaterias();
  }, []);

  const cargarMaterias = async () => {
    try {
      const response = await api.get('/asignaciones');
      setMaterias(response.data);
    } catch (err) {
      setError('No se pudieron cargar las materias.');
    }
    setCargando(false);
  };

  const handleGuardar = async (e) => {
    e.preventDefault();
    setGuardando(true);
    try {
      await api.post('/asignaciones', form);
      setExito('Materia creada correctamente.');
      setMostrarForm(false);
      setForm({ nombre: '', codigo: '', docente: { idDocente: 1 } });
      cargarMaterias();
    } catch (err) {
      setError('No se pudo crear la materia.');
    }
    setGuardando(false);
  };

  const handleEliminar = async (id) => {
    if (!confirm('¿Estás seguro de eliminar esta materia?')) return;
    try {
      await api.delete(`/asignaciones/${id}`);
      setExito('Materia eliminada correctamente.');
      cargarMaterias();
    } catch (err) {
      setError('No se pudo eliminar la materia.');
    }
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
          <h2 className="text-2xl font-bold text-gray-800">Gestionar Materias y Horarios</h2>
          <button
            onClick={() => setMostrarForm(!mostrarForm)}
            className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900 transition"
          >
            {mostrarForm ? 'Cancelar' : '+ Nueva Asignación'}
          </button>
        </div>

        {exito && <div className="bg-green-100 text-green-800 px-4 py-2 rounded mb-4">{exito}</div>}
        {error && <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4">{error}</div>}

        {mostrarForm && (
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h3 className="font-bold text-gray-800 mb-4">Nueva Asignación</h3>
            <form onSubmit={handleGuardar} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 text-sm mb-1">ID Materia</label>
                <input
                  type="number"
                  value={form.materia?.idMateria || ''}
                  onChange={(e) => setForm({ ...form, materia: { idMateria: parseInt(e.target.value) } })}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-1">ID Aula</label>
                <input
                  type="number"
                  value={form.aula?.idAula || ''}
                  onChange={(e) => setForm({ ...form, aula: { idAula: parseInt(e.target.value) } })}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-1">Día</label>
                <select
                  value={form.dia || ''}
                  onChange={(e) => setForm({ ...form, dia: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  required
                >
                  <option value="">Seleccionar</option>
                  <option>Lunes</option>
                  <option>Martes</option>
                  <option>Miercoles</option>
                  <option>Jueves</option>
                  <option>Viernes</option>
                  <option>Sabado</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-1">Hora inicio</label>
                <input
                  type="time"
                  value={form.horaInicio || ''}
                  onChange={(e) => setForm({ ...form, horaInicio: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-1">Hora fin</label>
                <input
                  type="time"
                  value={form.horaFin || ''}
                  onChange={(e) => setForm({ ...form, horaFin: e.target.value })}
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
                <th className="px-4 py-3 text-left text-gray-700">Materia</th>
                <th className="px-4 py-3 text-left text-gray-700">Aula</th>
                <th className="px-4 py-3 text-left text-gray-700">Día</th>
                <th className="px-4 py-3 text-left text-gray-700">Horario</th>
                <th className="px-4 py-3 text-left text-gray-700">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cargando ? (
                <tr><td colSpan={5} className="px-4 py-3 text-center text-gray-400">Cargando...</td></tr>
              ) : materias.map((a) => (
                <tr key={a.idAsignacion} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-800">{a.materia?.nombre}</td>
                  <td className="px-4 py-3 text-gray-600">{a.aula?.codigo}</td>
                  <td className="px-4 py-3 text-gray-600">{a.dia}</td>
                  <td className="px-4 py-3 text-gray-600">{a.horaInicio} - {a.horaFin}</td>
                  <td className="px-4 py-3">
                    <button onClick={() => handleEliminar(a.idAsignacion)} className="text-red-600 hover:text-red-800 text-xs">
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