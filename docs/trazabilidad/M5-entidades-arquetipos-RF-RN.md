# M5 - Matriz de Trazabilidad: Entidades → Arquetipos → RF → Reglas de Negocio

| Entidad | Arquetipo | Requisito Funcional | Regla de Negocio |
|---------|-----------|-------------------|-----------------|
| Usuario | Estudiante | RF01 - Autenticación | RN01 - El correo debe ser institucional (@remington.edu.co) |
| Usuario | Administrador | RF02 - Control de acceso | RN02 - Solo el administrador puede gestionar usuarios |
| Usuario | Docente | RF02 - Control de acceso | RN03 - El docente solo puede ver sus materias asignadas |
| Estudiante | Estudiante | RF03 - Ver horario | RN04 - El horario se genera automáticamente según matrícula |
| Aula | Aula | RF09 - Disponibilidad | RN05 - Un aula no puede tener dos clases al mismo tiempo |
| Asignacion | Aula | RF14 - Asignación | RN06 - Una materia debe tener aula, día y horario definidos |
| Torre | Torre | RF10 - Mapa | RN07 - El sistema debe mostrar todas las torres del campus |
| Piso | Piso | RF04 - Buscar aula | RN08 - Cada piso pertenece a una sola torre |
| Notificacion | Notificacion | RF11 - Notificaciones | RN09 - Las notificaciones se envían en tiempo real |
| ReporteSoporte | Servicio de Ayuda | RF12 - Reportes | RN10 - Todo reporte debe tener estado: PENDIENTE, EN_PROCESO o RESUELTO |
| Ruta | Ruta | RF16 - Ruta óptima | RN11 - La ruta se calcula entre dos ubicaciones válidas del campus |
| Consulta | Consulta | RF13 - Historial | RN12 - Cada búsqueda queda registrada con fecha y criterio |
