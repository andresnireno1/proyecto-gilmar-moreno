# M7 - Matriz de Trazabilidad: Tablas MER → PK → FK → Forma Normal

| Tabla | Clave Primaria (PK) | Claves Foráneas (FK) | Forma Normal |
|-------|-------------------|---------------------|-------------|
| ROL | id_rol | - | 3FN |
| USUARIO | id_usuario | id_rol → ROL | 3FN |
| ADMINISTRADOR | id_admin | id_usuario → USUARIO | 3FN |
| DOCENTE | id_docente | id_usuario → USUARIO | 3FN |
| CARRERA | id_carrera | - | 3FN |
| ESTUDIANTE | id_estudiante | id_usuario → USUARIO, id_carrera → CARRERA | 3FN |
| TORRE | id_torre | - | 3FN |
| PISO | id_piso | id_torre → TORRE | 3FN |
| AULA | id_aula | id_piso → PISO | 3FN |
| MATERIA | id_materia | id_docente → DOCENTE | 3FN |
| ASIGNACION | id_asignacion | id_materia → MATERIA, id_aula → AULA | 3FN |
| UBICACION | id_ubicacion | id_estudiante → ESTUDIANTE | 3FN |
| RUTA | id_ruta | origen → UBICACION, destino → UBICACION | 3FN |
| CONSULTA | id_consulta | id_estudiante → ESTUDIANTE | 3FN |
| NOTIFICACION | id_notificacion | id_estudiante → ESTUDIANTE | 3FN |
| REPORTE_SOPORTE | id_reporte | id_estudiante → ESTUDIANTE | 3FN |
