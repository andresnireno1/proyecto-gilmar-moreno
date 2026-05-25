import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

export default function GestionUsuarios() {
  const navigate = useNavigate();
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');
  const [mostrarForm, setMostrarForm] = useState(false);
  const [form, setForm] = useState({ correo: '', contrasena: '', estado: 'ACTIVO', rol: { idRol: 1 } });
  const [guardando, setGuardando] = useState(false);
  const [exito, setExito] = useState('');

  useEffect(() => {
    cargarUsuarios();
  }, []);

  const cargarUsuarios = async () => {
    try {
      const response = await api.get('/usuarios');
      setUsuarios(response.data);
    } catch (err) {
      setError('No se pudieron cargar los usuarios.');
    }
    setCargando(false);
  };

  const handleGuardar = async (e) => {
    e.preventDefault();
    setGuardando(true);
    try {
      await api.post('/usuarios', form);
      setExito('Usuario creado correctamente.');
      setMostrarForm(false);
      setForm({ correo: '', contrasena: '', estado: 'ACTIVO', rol: { idRol: 1 } });
      cargarUsuarios();
    } catch (err) {
      setError('No se pudo crear el usuario.');
    }
    setGuardando(false);
  };

  const handleEliminar = async (id) => {
    if (!confirm('¿Estás seguro de eliminar este usuario?')) return;
    try {
      await api.delete(`/usuarios/${id}`);
      setExito('Usuario eliminado correctamente.');
      cargarUsuarios();
    } catch (err) {
      setError('No se pudo eliminar el usuario.');
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
          <h2 className="text-2xl font-bold text-gray-800">Gestionar Usuarios</h2>
          <button
            onClick={() => setMostrarForm(!mostrarForm)}
            className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900 transition"
          >
            {mostrarForm ? 'Cancelar' : '+ Nuevo Usuario'}
          </button>
        </div>

        {exito && <div className="bg-green-100 text-green-800 px-4 py-2 rounded mb-4">{exito}</div>}
        {error && <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4">{error}</div>}

        {mostrarForm && (
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h3 className="font-bold text-gray-800 mb-4">Nuevo Usuario</h3>
            <form onSubmit={handleGuardar} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 text-sm mb-1">Correo</label>
                <input
                  type="email"
                  value={form.correo}
                  onChange={(e) => setForm({ ...form, correo: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-1">Contraseña</label>
                <input
                  type="password"
                  value={form.contrasena}
                  onChange={(e) => setForm({ ...form, contrasena: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-1">Rol</label>
                <select
                  value={form.rol.idRol}
                  onChange={(e) => setForm({ ...form, rol: { idRol: parseInt(e.target.value) } })}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                >
                  <option value={1}>ESTUDIANTE</option>
                  <option value={2}>ADMINISTRADOR</option>
                  <option value={3}>DOCENTE</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-1">Estado</label>
                <select
                  value={form.estado}
                  onChange={(e) => setForm({ ...form, estado: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                >
                  <option value="ACTIVO">ACTIVO</option>
                  <option value="INACTIVO">INACTIVO</option>
                </select>
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
                <th className="px-4 py-3 text-left text-gray-700">ID</th>
                <th className="px-4 py-3 text-left text-gray-700">Correo</th>
                <th className="px-4 py-3 text-left text-gray-700">Rol</th>
                <th className="px-4 py-3 text-left text-gray-700">Estado</th>
                <th className="px-4 py-3 text-left text-gray-700">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cargando ? (
                <tr><td colSpan={5} className="px-4 py-3 text-center text-gray-400">Cargando...</td></tr>
              ) : usuarios.map((u) => (
                <tr key={u.idUsuario} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-600">{u.idUsuario}</td>
                  <td className="px-4 py-3 text-gray-800">{u.correo}</td>
                  <td className="px-4 py-3">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">{u.rol?.nombre}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`text-xs px-2 py-1 rounded-full ${u.estado === 'ACTIVO' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {u.estado}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => handleEliminar(u.idUsuario)}
                      className="text-red-600 hover:text-red-800 text-xs"
                    >
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