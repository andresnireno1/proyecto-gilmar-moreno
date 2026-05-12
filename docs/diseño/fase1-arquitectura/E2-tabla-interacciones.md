# 5.2 Tabla de Interacciones

Describe el flujo de información que entra y sale del sistema para cada entidad identificada.

| # | Entidad Externa | Envía al Sistema | Recibe del Sistema |
|---|----------------|-----------------|-------------------|
| 1 | Estudiante | Credenciales, consultas de aula, reportes. | Horarios, rutas, notificaciones. |
| 2 | Administrador | CRUD de horarios, materias y aulas. | Paneles de control, reportes de incidencias. |
| 3 | Navegador Web | Peticiones HTTP/S, tokens de sesión. | HTML, CSS, JS, datos JSON. |
| 4 | Base de Datos | Resultados de consultas (Select). | Sentencias CRUD (Insert, Update, Delete). |
| 5 | Serv. Notificaciones | Confirmación de entrega. | Solicitudes de envío con destinatario/mensaje. |
| 6 | Servicio de Ayuda | Consultas del estudiante con contexto. | Respuestas en lenguaje natural. |
| 7 | Infraestructura HTTPS | Paquetes cifrados. | Certificados de validación TLS. |
| 8 | Institución/Univ. | Calendarios y datos académicos oficiales. | Reportes de uso e incidencias institucionales. |
| 9 | Equipo Desarrollo | Actualizaciones de código, parches. | Logs de error, métricas de rendimiento. |
