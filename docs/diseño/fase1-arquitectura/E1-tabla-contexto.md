# 5.1 Tabla de Contexto

Esta tabla identifica las entidades externas que interactúan con el sistema SIGAU, clasificándolas y justificándolas según los requisitos.

| # | Entidad Externa | Tipo | Descripción | Justificación (ERS) |
|---|----------------|------|-------------|---------------------|
| 1 | Estudiante | Usuario | Usuario final que consulta horarios, mapas, rutas, aulas y recibe notificaciones. | §1 Actor "Estudiante" |
| 2 | Administrador | Usuario | Gestiona la información académica, horarios, aulas, materias y usuarios del sistema. | §1 Actor "Administrador" |
| 3 | Navegador Web | Sistema Par | Intermediario técnico que permite renderizar y visualizar la interfaz del sistema. | §5.3 Navegadores web |
| 4 | Base de Datos | Subordinado | Almacena y proporciona la información necesaria para el funcionamiento del sistema. | §5.3 Almacenamiento |
| 5 | Servicio de Notificaciones | Servicio Externo | Encargado de entregar alertas y mensajes a los usuarios en tiempo real. | §5.1 Notificaciones |
| 6 | Servicio de Ayuda | Servicio Externo | Módulo de asistencia y orientación básica para resolver dudas de los usuarios. | §5.1 Servicio de ayuda |
| 7 | Infraestructura HTTPS | Canal | Garantiza la seguridad y confidencialidad en la transmisión de datos entre el usuario y el sistema. | §5.4 Seguridad de datos |
| 8 | Institución / Universidad | Sistema Superior | Proporciona información académica y lineamientos institucionales necesarios para el funcionamiento del sistema. | §1 Requisitos Inst. |
| 9 | Equipo de Desarrollo | Operativo | Encargado del mantenimiento, actualización y despliegue del sistema. | §1 Soporte técnico |
