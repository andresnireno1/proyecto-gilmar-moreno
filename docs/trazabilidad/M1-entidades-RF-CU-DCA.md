# M1 - Matriz de Trazabilidad: Entidades → Requisitos Funcionales → Casos de Uso → DCA

| Entidad | Requisito Funcional | Caso de Uso | Componente DCA |
|---------|-------------------|-------------|----------------|
| Usuario | RF01 - Autenticación por correo institucional | CU01 - Iniciar Sesión | AuthComponent |
| Rol | RF02 - Control de acceso por roles | CU01 - Iniciar Sesión | AuthComponent |
| Estudiante | RF03 - Consultar horario personalizado | CU02 - Ver Horario | MapComponent |
| Estudiante | RF04 - Buscar aula en el mapa | CU03 - Buscar Aula | MapComponent |
| Estudiante | RF05 - Calcular ruta hacia un aula | CU04 - Calcular Ruta | RouteComponent |
| Administrador | RF06 - Gestionar usuarios | CU05 - Gestionar Usuarios | AuthComponent |
| Administrador | RF07 - Gestionar materias y horarios | CU06 - Gestionar Horarios | DatabaseComponent |
| Docente | RF08 - Consultar materias asignadas | CU07 - Ver Materias | DatabaseComponent |
| Aula | RF09 - Consultar disponibilidad de aulas | CU03 - Buscar Aula | MapComponent |
| Torre | RF10 - Visualizar mapa del campus | CU04 - Calcular Ruta | MapComponent |
| Notificacion | RF11 - Recibir notificaciones académicas | CU08 - Recibir Notificaciones | NotificationComponent |
| ReporteSoporte | RF12 - Reportar problemas del sistema | CU09 - Reportar Problema | HelpComponent |
| Consulta | RF13 - Registrar historial de búsquedas | CU03 - Buscar Aula | DatabaseComponent |
| Asignacion | RF14 - Asignar materias a aulas y horarios | CU06 - Gestionar Horarios | DatabaseComponent |
| Ubicacion | RF15 - Registrar ubicación del estudiante | CU04 - Calcular Ruta | RouteComponent |
| Ruta | RF16 - Generar ruta óptima entre ubicaciones | CU04 - Calcular Ruta | RouteComponent |
