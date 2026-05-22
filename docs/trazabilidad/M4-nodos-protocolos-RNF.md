# M4 - Matriz de Trazabilidad: Nodos de Despliegue → Protocolos → Requisitos No Funcionales

| Nodo | Protocolo | Requisito No Funcional |
|------|-----------|----------------------|
| Cliente (Smartphone/PC) | HTTPS (SSL/TLS) | RNF01 - Seguridad en transmisión de datos |
| Cliente (Smartphone/PC) | HTTP/S | RNF02 - Compatibilidad con navegadores web |
| Servidor de Aplicaciones (SIGAU) | HTTPS (SSL/TLS) | RNF01 - Seguridad en transmisión de datos |
| Servidor de Aplicaciones (SIGAU) | JDBC/SQL (TCP/IP) | RNF03 - Persistencia y disponibilidad de datos |
| Servidor de Aplicaciones (SIGAU) | API REST | RNF04 - Interoperabilidad con frontend |
| Servidor de Base de Datos (MySQL) | JDBC/SQL (TCP/IP) | RNF03 - Persistencia y disponibilidad de datos |
| Servidor de Base de Datos (MySQL) | TCP/IP | RNF05 - Rendimiento en consultas |
| Infraestructura HTTPS | SSL/TLS | RNF01 - Seguridad en transmisión de datos |
| Infraestructura HTTPS | TLS | RNF06 - Confidencialidad de datos del usuario |
| Servidor de Aplicaciones (SIGAU) | JWT | RNF07 - Autenticación segura sin estado |
