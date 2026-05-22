# M9 - Matriz de Trazabilidad: Clases → Métodos → Casos de Uso → RF

| Clase | Método | Caso de Uso | Requisito Funcional |
|-------|--------|-------------|-------------------|
| Usuario | iniciarSesion() | CU01 - Iniciar Sesión | RF01 - Autenticación |
| Usuario | cerrarSesion() | CU01 - Iniciar Sesión | RF01 - Autenticación |
| Usuario | cambiarContraseña() | CU01 - Iniciar Sesión | RF01 - Autenticación |
| Administrador | gestionarUsuarios() | CU05 - Gestionar Usuarios | RF06 - Gestionar usuarios |
| Administrador | gestionarMaterias() | CU06 - Gestionar Horarios | RF07 - Gestionar materias |
| Administrador | gestionarAulas() | CU06 - Gestionar Horarios | RF14 - Asignar materias |
| Administrador | generarReportes() | CU10 - Ver Reportes | RF06 - Gestionar usuarios |
| Docente | crearMateria() | CU06 - Gestionar Horarios | RF08 - Consultar materias |
| Docente | verHorario() | CU02 - Ver Horario | RF08 - Consultar materias |
| Docente | asignarAula() | CU06 - Gestionar Horarios | RF14 - Asignar materias |
| Estudiante | consultarMapa() | CU03 - Buscar Aula | RF04 - Buscar aula |
| Estudiante | buscarAula() | CU03 - Buscar Aula | RF04 - Buscar aula |
| Estudiante | calcularRuta() | CU04 - Calcular Ruta | RF05 - Calcular ruta |
| Estudiante | verHorario() | CU02 - Ver Horario | RF03 - Ver horario |
| Ruta | generarRuta() | CU04 - Calcular Ruta | RF16 - Ruta óptima |
| Ruta | mostrarRuta() | CU04 - Calcular Ruta | RF16 - Ruta óptima |
| Ruta | calcularTiempo() | CU04 - Calcular Ruta | RF16 - Ruta óptima |
| Consulta | obtenerResultados() | CU03 - Buscar Aula | RF13 - Historial |
| Notificacion | marcar() | CU08 - Notificaciones | RF11 - Notificaciones |
| ReporteSoporte | actualizarEstado() | CU09 - Reportar Problema | RF12 - Reportes |
| ReporteSoporte | cerrarReporte() | CU09 - Reportar Problema | RF12 - Reportes |
