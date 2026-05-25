import { useNavigate } from 'react-router-dom';

export default function DashboardAdmin() {
  const navigate = useNavigate();
  const correo = localStorage.getItem('correo');

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-800 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">SIGAU</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm">{correo}</span>
          <button onClick={handleLogout} className="bg-white text-blue-800 px-3 py-1 rounded text-sm hover:bg-gray-100">
            Cerrar sesión
          </button>
        </div>
      </nav>

      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Panel del Administrador</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div onClick={() => navigate('/admin/usuarios')} className="bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-md transition">
            <div className="text-4xl mb-3">👥</div>
            <h3 className="text-lg font-semibold text-gray-800">Gestionar Usuarios</h3>
            <p className="text-gray-500 text-sm">Administra estudiantes y docentes</p>
          </div>

          <div onClick={() => navigate('/admin/materias')} className="bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-md transition">
            <div className="text-4xl mb-3">📚</div>
            <h3 className="text-lg font-semibold text-gray-800">Gestionar Materias</h3>
            <p className="text-gray-500 text-sm">Administra materias y horarios</p>
          </div>

          <div onClick={() => navigate('/admin/aulas')} className="bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-md transition">
            <div className="text-4xl mb-3">🏫</div>
            <h3 className="text-lg font-semibold text-gray-800">Gestionar Aulas</h3>
            <p className="text-gray-500 text-sm">Administra aulas y disponibilidad</p>
          </div>

          <div onClick={() => navigate('/admin/reportes')} className="bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-md transition">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="text-lg font-semibold text-gray-800">Reportes</h3>
            <p className="text-gray-500 text-sm">Ver reportes del sistema</p>
          </div>

          <div onClick={() => navigate('/admin/notificaciones')} className="bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-md transition">
            <div className="text-4xl mb-3">🔔</div>
            <h3 className="text-lg font-semibold text-gray-800">Notificaciones</h3>
            <p className="text-gray-500 text-sm">Enviar notificaciones a estudiantes</p>
          </div>
        </div>
      </div>
    </div>
  );
}