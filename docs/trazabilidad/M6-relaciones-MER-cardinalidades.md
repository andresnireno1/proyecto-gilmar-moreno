# M6 - Matriz de Trazabilidad: Relaciones MER → Cardinalidades → Justificación

| Entidad A | Relación | Entidad B | Cardinalidad | Justificación |
|-----------|----------|-----------|-------------|---------------|
| ROL | clasifica | USUARIO | 1:N | Un rol puede tener muchos usuarios, un usuario tiene un solo rol |
| USUARIO | es | ADMINISTRADOR | 1:1 | Un usuario puede ser un solo administrador |
| USUARIO | es | DOCENTE | 1:1 | Un usuario puede ser un solo docente |
| USUARIO | es | ESTUDIANTE | 1:1 | Un usuario puede ser un solo estudiante |
| CARRERA | pertenece | ESTUDIANTE | 1:N | Una carrera tiene muchos estudiantes |
| TORRE | contiene | PISO | 1:N | Una torre tiene varios pisos |
| PISO | contiene | AULA | 1:N | Un piso tiene varias aulas |
| DOCENTE | imparte | MATERIA | 1:N | Un docente puede impartir varias materias |
| MATERIA | se asigna | ASIGNACION | 1:N | Una materia puede tener varias asignaciones |
| AULA | se asigna | ASIGNACION | 1:N | Un aula puede tener varias asignaciones |
| ESTUDIANTE | registra | UBICACION | 1:N | Un estudiante puede tener varias ubicaciones |
| UBICACION | origina | RUTA | 1:N | Una ubicación puede ser origen de varias rutas |
| UBICACION | destino | RUTA | 1:N | Una ubicación puede ser destino de varias rutas |
| ESTUDIANTE | realiza | CONSULTA | 1:N | Un estudiante puede hacer varias consultas |
| ESTUDIANTE | recibe | NOTIFICACION | 1:N | Un estudiante puede recibir varias notificaciones |
| ESTUDIANTE | genera | REPORTE_SOPORTE | 1:N | Un estudiante puede generar varios reportes |
