# M10 - Matriz de Trazabilidad: Diagramas de Secuencia → CU → Clases

| Diagrama de Secuencia | Caso de Uso | Clases Involucradas |
|----------------------|-------------|-------------------|
| 1. Inicio de Sesión | CU01 - Iniciar Sesión | Usuario, AuthComponent, Base de Datos |
| 2. Búsqueda de Aula | CU03 - Buscar Aula | Estudiante, Consulta, Aula, SearchComponent, Base de Datos |
| 3. Cálculo de Ruta | CU04 - Calcular Ruta | Estudiante, Ruta, Ubicacion, RouteComponent, MapComponent, Base de Datos |

## Detalle por Secuencia

### Secuencia 1: Inicio de Sesión
| Paso | Clase Origen | Clase Destino | Método |
|------|-------------|---------------|--------|
| 1 | Estudiante | Interfaz Login | ingresarCredenciales() |
| 2 | Interfaz Login | AuthComponent | enviarCredenciales() |
| 3 | AuthComponent | Base de Datos | consultarUsuario() |
| 4 | AuthComponent | AuthComponent | verificarContraseña() |
| 5 | AuthComponent | AuthComponent | crearSesion() |

### Secuencia 2: Búsqueda de Aula
| Paso | Clase Origen | Clase Destino | Método |
|------|-------------|---------------|--------|
| 1 | Estudiante | Interfaz Búsqueda | ingresarCriterio() |
| 2 | Interfaz Búsqueda | SearchComponent | buscarAula() |
| 3 | SearchComponent | Base de Datos | consultarAulas() |
| 4 | SearchComponent | SearchComponent | formatearResultados() |

### Secuencia 3: Cálculo de Ruta
| Paso | Clase Origen | Clase Destino | Método |
|------|-------------|---------------|--------|
| 1 | Estudiante | RouteComponent | solicitarRuta() |
| 2 | RouteComponent | MapComponent | obtenerUbicaciones() |
| 3 | RouteComponent | RouteComponent | calcularRuta() |
| 4 | RouteComponent | Interfaz | mostrarRuta() |
