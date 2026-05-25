import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import DashboardEstudiante from './pages/DashboardEstudiante';
import DashboardAdmin from './pages/DashboardAdmin';
import DashboardDocente from './pages/DashboardDocente';
import MapaCampus from './pages/MapaCampus';
import Notificaciones from './pages/Notificaciones';
import MiHorario from './pages/MiHorario';
import ReportarProblema from './pages/ReportarProblema';
import GestionUsuarios from './pages/admin/GestionUsuarios';
import GestionAulas from './pages/admin/GestionAulas';
import GestionMaterias from './pages/admin/GestionMaterias';
import VerReportes from './pages/admin/VerReportes';
import EnviarNotificaciones from './pages/admin/EnviarNotificaciones';
import MisMaterias from './pages/docente/MisMaterias';

function PrivateRoute({ children, rol }) {
  const token = localStorage.getItem('token');
  const userRol = localStorage.getItem('rol');
  if (!token) return <Navigate to="/" />;
  if (rol && userRol !== rol) return <Navigate to="/" />;
  return children;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/estudiante" element={
          <PrivateRoute rol="ESTUDIANTE">
            <DashboardEstudiante />
          </PrivateRoute>
        } />
        <Route path="/admin" element={
          <PrivateRoute rol="ADMINISTRADOR">
            <DashboardAdmin />
          </PrivateRoute>
        } />
        <Route path="/docente" element={
          <PrivateRoute rol="DOCENTE">
            <DashboardDocente />
          </PrivateRoute>
        } />
        <Route path="/mapa" element={
          <PrivateRoute>
            <MapaCampus />
          </PrivateRoute>
        } />
        <Route path="/notificaciones" element={
          <PrivateRoute>
            <Notificaciones />
          </PrivateRoute>
        } />
        <Route path="/horario" element={
          <PrivateRoute>
            <MiHorario />
          </PrivateRoute>
        } />
        <Route path="/reporte" element={
          <PrivateRoute>
            <ReportarProblema />
          </PrivateRoute>
        } />
        <Route path="/admin/usuarios" element={
          <PrivateRoute rol="ADMINISTRADOR">
            <GestionUsuarios />
          </PrivateRoute>
        } />
        <Route path="/admin/aulas" element={
          <PrivateRoute rol="ADMINISTRADOR">
            <GestionAulas />
          </PrivateRoute>
        } />
        <Route path="/admin/materias" element={
          <PrivateRoute rol="ADMINISTRADOR">
            <GestionMaterias />
          </PrivateRoute>
        } />
        <Route path="/admin/reportes" element={
          <PrivateRoute rol="ADMINISTRADOR">
            <VerReportes />
          </PrivateRoute>
        } />
        <Route path="/admin/notificaciones" element={
          <PrivateRoute rol="ADMINISTRADOR">
            <EnviarNotificaciones />
          </PrivateRoute>
        } />
        <Route path="/docente/materias" element={
          <PrivateRoute rol="DOCENTE">
            <MisMaterias />
          </PrivateRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;