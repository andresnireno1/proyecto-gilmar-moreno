# Modelo Entidad-Relación (MER)

El Modelo Entidad-Relación del sistema SIGAU fue corregido y normalizado para garantizar integridad referencial, escalabilidad y consistencia entre el diseño conceptual y el modelo físico de la base de datos.

## Principales Relaciones

| Entidad A | Entidad B | Cardinalidad |
|-----------|-----------|-------------|
| ROL | USUARIO | 1:N |
| USUARIO | ADMINISTRADOR | 1:1 |
| USUARIO | DOCENTE | 1:1 |
| USUARIO | ESTUDIANTE | 1:1 |
| CARRERA | ESTUDIANTE | 1:N |
| TORRE | PISO | 1:N |
| PISO | AULA | 1:N |
| DOCENTE | MATERIA | 1:N |
| MATERIA | ASIGNACION | 1:N |
| AULA | ASIGNACION | 1:N |
| ESTUDIANTE | CONSULTA | 1:N |
| ESTUDIANTE | NOTIFICACION | 1:N |
| ESTUDIANTE | REPORTE_SOPORTE | 1:N |
| ESTUDIANTE | UBICACION | 1:N |

## Notas de Diseño

La relación N:M entre **MATERIA** y **AULA** fue resuelta mediante la entidad intermedia **ASIGNACION**, permitiendo almacenar información adicional como día y horario.

La entidad **RUTA** contiene dos claves foráneas hacia **UBICACION**:
- `id_origen`
- `id_destino`
