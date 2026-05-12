# Diccionario de Datos

## ROL
| Atributo | Descripción |
|----------|-------------|
| id_rol | Clave primaria |
| nombre | Nombre del rol |

## USUARIO
| Atributo | Descripción |
|----------|-------------|
| id_usuario | Clave primaria |
| correo | Correo electrónico |
| contraseña | Contraseña del usuario |
| estado | Estado de la cuenta |
| id_rol (FK) | Referencia a ROL |

## ADMINISTRADOR
| Atributo | Descripción |
|----------|-------------|
| id_admin | Clave primaria |
| nombre | Nombre del administrador |
| id_usuario (FK) | Referencia a USUARIO |

## DOCENTE
| Atributo | Descripción |
|----------|-------------|
| id_docente | Clave primaria |
| nombre | Nombre del docente |
| correo | Correo electrónico |
| especialidad | Área de especialidad |
| id_usuario (FK) | Referencia a USUARIO |

## CARRERA
| Atributo | Descripción |
|----------|-------------|
| id_carrera | Clave primaria |
| nombre | Nombre de la carrera |
| descripcion | Descripción de la carrera |

## ESTUDIANTE
| Atributo | Descripción |
|----------|-------------|
| id_estudiante | Clave primaria |
| nombre | Nombre del estudiante |
| estado_sesion | Estado de sesión activa |
| id_usuario (FK) | Referencia a USUARIO |
| id_carrera (FK) | Referencia a CARRERA |

## TORRE
| Atributo | Descripción |
|----------|-------------|
| id_torre | Clave primaria |
| nombre | Nombre de la torre |
| ubicacion | Ubicación física |
| descripcion | Descripción de la torre |

## PISO
| Atributo | Descripción |
|----------|-------------|
| id_piso | Clave primaria |
| numero_piso | Número del piso |
| descripcion | Descripción del piso |
| id_torre (FK) | Referencia a TORRE |

## AULA
| Atributo | Descripción |
|----------|-------------|
| id_aula | Clave primaria |
| codigo | Código del aula |
| capacidad | Capacidad de estudiantes |
| estado | Estado del aula |
| id_piso (FK) | Referencia a PISO |

## MATERIA
| Atributo | Descripción |
|----------|-------------|
| id_materia | Clave primaria |
| nombre | Nombre de la materia |
| codigo | Código de la materia |
| id_docente (FK) | Referencia a DOCENTE |

## ASIGNACION
| Atributo | Descripción |
|----------|-------------|
| id_asignacion | Clave primaria |
| id_materia (FK) | Referencia a MATERIA |
| id_aula (FK) | Referencia a AULA |
| dia | Día de la clase |
| hora_inicio | Hora de inicio |
| hora_fin | Hora de finalización |

## UBICACION
| Atributo | Descripción |
|----------|-------------|
| id_ubicacion | Clave primaria |
| coordenadas | Coordenadas del punto |
| referencia | Referencia descriptiva |
| id_estudiante (FK) | Referencia a ESTUDIANTE |

## RUTA
| Atributo | Descripción |
|----------|-------------|
| id_ruta | Clave primaria |
| origen (FK) | Referencia a UBICACION (origen) |
| destino (FK) | Referencia a UBICACION (destino) |
| distancia | Distancia de la ruta |
| tiempo_estimado | Tiempo estimado de recorrido |

## CONSULTA
| Atributo | Descripción |
|----------|-------------|
| id_consulta | Clave primaria |
| criterio_busqueda | Criterio usado en la consulta |
| fecha | Fecha de la consulta |
| id_estudiante (FK) | Referencia a ESTUDIANTE |

## NOTIFICACION
| Atributo | Descripción |
|----------|-------------|
| id_notificacion | Clave primaria |
| mensaje | Contenido del mensaje |
| fecha_envio | Fecha de envío |
| tipo | Tipo de notificación |
| id_estudiante (FK) | Referencia a ESTUDIANTE |

## REPORTE_SOPORTE
| Atributo | Descripción |
|----------|-------------|
| id_reporte | Clave primaria |
| descripcion | Descripción del reporte |
| estado | Estado del reporte |
| fecha_reporte | Fecha del reporte |
| id_estudiante (FK) | Referencia a ESTUDIANTE |
