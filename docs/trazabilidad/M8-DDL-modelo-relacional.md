# M8 - Matriz de Trazabilidad: DDL → Modelo Relacional

| Sentencia DDL | Tabla | Corresponde a Modelo Relacional |
|--------------|-------|-------------------------------|
| CREATE TABLE rol | ROL | ROL(id_rol PK, nombre) |
| CREATE TABLE usuario | USUARIO | USUARIO(id_usuario PK, correo, contrasena, estado, id_rol FK) |
| CREATE TABLE administrador | ADMINISTRADOR | ADMINISTRADOR(id_admin PK, nombre, id_usuario FK) |
| CREATE TABLE docente | DOCENTE | DOCENTE(id_docente PK, nombre, correo, especialidad, id_usuario FK) |
| CREATE TABLE carrera | CARRERA | CARRERA(id_carrera PK, nombre, descripcion) |
| CREATE TABLE estudiante | ESTUDIANTE | ESTUDIANTE(id_estudiante PK, nombre, estado_sesion, id_usuario FK, id_carrera FK) |
| CREATE TABLE torre | TORRE | TORRE(id_torre PK, nombre, ubicacion, descripcion) |
| CREATE TABLE piso | PISO | PISO(id_piso PK, numero_piso, descripcion, id_torre FK) |
| CREATE TABLE aula | AULA | AULA(id_aula PK, codigo, capacidad, estado, id_piso FK) |
| CREATE TABLE materia | MATERIA | MATERIA(id_materia PK, nombre, codigo, id_docente FK) |
| CREATE TABLE asignacion | ASIGNACION | ASIGNACION(id_asignacion PK, id_materia FK, id_aula FK, dia, hora_inicio, hora_fin) |
| CREATE TABLE ubicacion | UBICACION | UBICACION(id_ubicacion PK, coordenadas, referencia, id_estudiante FK) |
| CREATE TABLE ruta | RUTA | RUTA(id_ruta PK, origen FK, destino FK, distancia, tiempo_estimado) |
| CREATE TABLE consulta | CONSULTA | CONSULTA(id_consulta PK, criterio_busqueda, fecha, id_estudiante FK) |
| CREATE TABLE notificacion | NOTIFICACION | NOTIFICACION(id_notificacion PK, mensaje, fecha_envio, tipo, id_estudiante FK) |
| CREATE TABLE reporte_soporte | REPORTE_SOPORTE | REPORTE_SOPORTE(id_reporte PK, descripcion, estado, fecha_reporte, id_estudiante FK) |
