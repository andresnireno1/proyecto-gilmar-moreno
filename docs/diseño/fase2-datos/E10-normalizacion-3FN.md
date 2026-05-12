# Normalización de la Base de Datos

## Primera Forma Normal (1FN)

La Primera Forma Normal establece que:
- Cada atributo debe contener valores atómicos.
- No deben existir grupos repetitivos.
- Cada registro debe ser único mediante una clave primaria.

El sistema SIGAU cumple con la 1FN porque:
- Todas las entidades poseen una clave primaria única.
- Los atributos contienen valores indivisibles.
- No existen listas ni atributos multivaluados.

**Ejemplos:**
- `USUARIO`(correo, contraseña, estado)
- `AULA`(codigo, capacidad, estado)
- `MATERIA`(nombre, codigo)

Cada atributo almacena un único valor por fila.

---

## Segunda Forma Normal (2FN)

La Segunda Forma Normal establece que:
- Debe cumplirse la 1FN.
- Todos los atributos no clave deben depender completamente de la clave primaria.
- No deben existir dependencias parciales.

El modelo SIGAU cumple con la 2FN porque:
- Todas las tablas utilizan claves primarias simples.
- Los atributos dependen totalmente de su identificador principal.

**Ejemplo — Tabla ESTUDIANTE:**
- `id_estudiante` → nombre
- `id_estudiante` → estado_sesion
- `id_estudiante` → id_carrera

**Ejemplo — Tabla ASIGNACION:**
- `id_asignacion` → id_materia
- `id_asignacion` → id_aula
- `id_asignacion` → dia
- `id_asignacion` → hora_inicio
- `id_asignacion` → hora_fin

No existen dependencias parciales.

---

## Tercera Forma Normal (3FN)

La Tercera Forma Normal establece que:
- Debe cumplirse la 2FN.
- No deben existir dependencias transitivas.
- Los atributos no clave no deben depender de otros atributos no clave.

El sistema SIGAU cumple con la 3FN porque:
- La información fue separada en entidades independientes.
- Las relaciones utilizan claves foráneas.
- No existen redundancias innecesarias.

**Separación de ROL y USUARIO:**

En lugar de almacenar `nombre_rol` dentro de USUARIO, se creó la entidad:
- `ROL`(id_rol, nombre)
- `USUARIO`(id_usuario, correo, contraseña, estado, id_rol)

Esto evita redundancia y dependencias transitivas.

**Separación de TORRE, PISO y AULA:**

La estructura `TORRE → PISO → AULA` permite evitar repetir nombre de torre, ubicación y descripción en cada aula.

**Resolución de relación N:M:**

La relación entre MATERIA y AULA fue normalizada mediante la entidad intermedia ASIGNACION, evitando duplicidad de horarios, redundancia de datos e inconsistencias académicas.

---

## Conclusión

El modelo de datos SIGAU fue normalizado hasta la Tercera Forma Normal (3FN), garantizando:
- Integridad referencial.
- Eliminación de redundancias.
- Escalabilidad.
- Consistencia de los datos.
- Facilidad de mantenimiento.
- Optimización de consultas y almacenamiento.

La implementación de entidades intermedias y relaciones mediante claves foráneas permite que el sistema mantenga una estructura modular y alineada con buenas prácticas de diseño de bases de datos relacionales.
