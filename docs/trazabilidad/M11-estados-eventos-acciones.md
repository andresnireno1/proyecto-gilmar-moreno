# M11 - Matriz de Trazabilidad: Estados → Eventos → Acciones

**Entidad: Ruta**

| Estado | Evento | Acción | Estado Siguiente |
|--------|--------|--------|-----------------|
| Inicio | Estudiante solicita ruta | Crear solicitud de ruta | Ruta Solicitada |
| Ruta Solicitada | Seleccionar origen y destino | Validar datos de entrada | Validando Datos |
| Validando Datos | Datos válidos | Iniciar cálculo de ruta | Calculando Ruta |
| Validando Datos | Datos inválidos | Mostrar error de validación | Error de Validación |
| Error de Validación | Reintentar | Solicitar nuevos datos | Ruta Solicitada |
| Calculando Ruta | Ruta encontrada | Generar ruta con distancia y tiempo | Ruta Generada |
| Calculando Ruta | No se encontró ruta | Mostrar error de cálculo | Error de Cálculo |
| Error de Cálculo | Reintentar | Volver a validar datos | Validando Datos |
| Ruta Generada | Mostrar ruta | Renderizar ruta en el mapa | Mostrando Ruta |
| Mostrando Ruta | Finalizar visualización | Cerrar visualización de ruta | Ruta Finalizada |
| Ruta Finalizada | Cambiar origen o destino | Solicitar nueva ruta | Recalcular Ruta |
| Recalcular Ruta | Reintentar | Volver a validar nuevos datos | Validando Datos |
| Ruta Finalizada | - | - | Fin |
