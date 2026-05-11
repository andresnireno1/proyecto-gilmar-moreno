Caso de Uso: Consultar mapa y ruta hacia un
aula
Historia de usuario de origen: “Mapa interactivo de las torres”
1. Nombre
Consultar mapa y ruta hacia aula
2. Actor principal
Estudiante de pregrado autenticado en la plataforma web.
3. Precondiciones
• El estudiante cuenta con un usuario registrado en la plataforma.
• El estudiante ha iniciado sesión en el sistema.
• La información de torres, pisos, aulas y su ubicación se encuentra registrada en
la base de datos.
• El dispositivo del estudiante cuenta con conexión a Internet.
• Si el estudiante utiliza la opción “desde mi ubicación actual”, debe otorgar
permisos de localización al navegador.
4. Postcondiciones
• La ruta hacia el aula seleccionada queda calculada y visible en la interfaz del
estudiante.
• El sistema registra la consulta realizada por el estudiante en el historial de
búsquedas.

5. Flujo básico
1. El estudiante accede al módulo “Mapa interactivo” desde el menú principal.
2. El sistema muestra el mapa general de las torres del campus, permitiendo
visualizar pisos y aulas disponibles.
3. El estudiante escribe el código del aula, nombre de la materia o docente
asociado en el buscador.
4. El sistema localiza el aula correspondiente y la resalta en el mapa, mostrando
información básica como torre, piso y código del aula.
5. El estudiante selecciona la opción “Calcular ruta” y define el punto de partida,
eligiendo entre ubicación actual o un punto de referencia dentro del campus.
6. El sistema obtiene el punto de partida desde la ubicación seleccionada por el
usuario.
7. El sistema calcula una ruta sugerida entre el punto de partida y el aula destino,
considerando la distribución de torres y pisos.
8. El sistema muestra la ruta en el mapa mediante indicaciones visuales y un
tiempo estimado de desplazamiento.
9. El estudiante revisa la ruta mostrada e inicia su desplazamiento hacia el aula.
6. Flujos alternativos
FA1. Aula no encontrada
3a. El estudiante ingresa un código de aula, materia o docente que no existe en el
sistema.
4a. El sistema informa que no se encontraron resultados y sugiere verificar la
información ingresada.
5a. El flujo regresa al paso 3 del flujo básico.

FA2. Ubicación actual no disponible
5b. El estudiante selecciona la opción “desde mi ubicación actual”, pero el sistema no
puede obtener la localización debido a falta de permisos o problemas de conexión.
6b. El sistema muestra un mensaje de error y solicita seleccionar manualmente un
punto de partida.
7b. El estudiante selecciona manualmente el punto de partida y el flujo continúa desde
el paso 7 del flujo básico.
FA3. Error de conexión o fallo del sistema de mapas
2c. El sistema no puede cargar el mapa debido a problemas de conexión o fallos
técnicos temporales.
3c. El sistema muestra un mensaje indicando que el servicio de mapas no se encuentra
disponible temporalmente.
4c. El estudiante podrá intentar nuevamente más tarde o utilizar información textual
básica proporcionada por el sistema.