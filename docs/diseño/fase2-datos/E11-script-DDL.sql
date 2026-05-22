
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


-- Base de datos: `sigau`

CREATE TABLE `rol` (
  `id_rol` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `rol` VALUES (2, 'ADMINISTRADOR'), (3, 'DOCENTE'), (1, 'ESTUDIANTE');

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `contrasena` varchar(255) NOT NULL,
  `estado` enum('ACTIVO','INACTIVO') DEFAULT 'ACTIVO',
  `id_rol` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `usuario` VALUES
(1, 'admin@sigau.com', '123456', 'ACTIVO', 2),
(2, 'docente@sigau.com', '123456', 'ACTIVO', 3),
(3, 'estudiante@sigau.com', '123456', 'ACTIVO', 1);

CREATE TABLE `administrador` (
  `id_admin` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `administrador` VALUES (1, 'Administrador Principal', 1);

CREATE TABLE `docente` (
  `id_docente` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `especialidad` varchar(100) DEFAULT NULL,
  `id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `docente` VALUES (1, 'Carlos Ramirez', 'carlos@sigau.com', 'Ingenieria Software', 2);

CREATE TABLE `carrera` (
  `id_carrera` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `carrera` VALUES (1, 'Ingenieria de Software', 'Carrera enfocada en desarrollo de software');

CREATE TABLE `estudiante` (
  `id_estudiante` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `estado_sesion` enum('ACTIVA','INACTIVA') DEFAULT 'INACTIVA',
  `id_usuario` int(11) NOT NULL,
  `id_carrera` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `estudiante` VALUES (1, 'Andres Moreno', 'ACTIVA', 3, 1);

CREATE TABLE `torre` (
  `id_torre` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `ubicacion` varchar(100) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `torre` VALUES (1, 'Torre A', 'Campus Norte', 'Edificio principal');

CREATE TABLE `piso` (
  `id_piso` int(11) NOT NULL,
  `numero_piso` int(11) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `id_torre` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `piso` VALUES (1, 1, 'Primer piso', 1);

CREATE TABLE `aula` (
  `id_aula` int(11) NOT NULL,
  `codigo` varchar(50) NOT NULL,
  `capacidad` int(11) NOT NULL,
  `estado` enum('DISPONIBLE','OCUPADA','MANTENIMIENTO') DEFAULT 'DISPONIBLE',
  `id_piso` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `aula` VALUES (1, 'A101', 40, 'DISPONIBLE', 1);

CREATE TABLE `materia` (
  `id_materia` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `codigo` varchar(50) NOT NULL,
  `id_docente` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `materia` VALUES (1, 'Ingenieria de Software II', 'ISW-202', 1);

CREATE TABLE `asignacion` (
  `id_asignacion` int(11) NOT NULL,
  `id_materia` int(11) NOT NULL,
  `id_aula` int(11) NOT NULL,
  `dia` varchar(20) NOT NULL,
  `hora_inicio` time NOT NULL,
  `hora_fin` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `asignacion` VALUES (1, 1, 1, 'Lunes', '18:00:00', '20:00:00');

CREATE TABLE `ubicacion` (
  `id_ubicacion` int(11) NOT NULL,
  `coordenadas` varchar(100) NOT NULL,
  `referencia` varchar(255) DEFAULT NULL,
  `id_estudiante` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `ubicacion` VALUES (1, '6.2518,-75.5636', 'Entrada principal', 1);

CREATE TABLE `ruta` (
  `id_ruta` int(11) NOT NULL,
  `origen` int(11) NOT NULL,
  `destino` int(11) NOT NULL,
  `distancia` decimal(10,2) DEFAULT NULL,
  `tiempo_estimado` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `ruta` VALUES (1, 1, 1, 120.50, 5.30);

CREATE TABLE `consulta` (
  `id_consulta` int(11) NOT NULL,
  `criterio_busqueda` varchar(255) NOT NULL,
  `fecha` datetime DEFAULT current_timestamp(),
  `id_estudiante` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `consulta` VALUES (1, 'Aula A101', '2026-05-07 23:37:49', 1);

CREATE TABLE `notificacion` (
  `id_notificacion` int(11) NOT NULL,
  `mensaje` varchar(255) NOT NULL,
  `fecha_envio` datetime DEFAULT current_timestamp(),
  `tipo` varchar(50) DEFAULT NULL,
  `id_estudiante` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `notificacion` VALUES (1, 'Cambio de aula programado', '2026-05-07 23:37:49', 'ACADEMICA', 1);

CREATE TABLE `reporte_soporte` (
  `id_reporte` int(11) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `estado` enum('PENDIENTE','EN_PROCESO','RESUELTO') DEFAULT 'PENDIENTE',
  `fecha_reporte` datetime DEFAULT current_timestamp(),
  `id_estudiante` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `reporte_soporte` VALUES (1, 'El mapa no carga correctamente', 'PENDIENTE', '2026-05-07 23:37:49', 1);

-- Índices y claves primarias

ALTER TABLE `rol` ADD PRIMARY KEY (`id_rol`), ADD UNIQUE KEY `nombre` (`nombre`);
ALTER TABLE `usuario` ADD PRIMARY KEY (`id_usuario`), ADD UNIQUE KEY `correo` (`correo`), ADD KEY `id_rol` (`id_rol`);
ALTER TABLE `administrador` ADD PRIMARY KEY (`id_admin`), ADD UNIQUE KEY `id_usuario` (`id_usuario`);
ALTER TABLE `docente` ADD PRIMARY KEY (`id_docente`), ADD UNIQUE KEY `correo` (`correo`), ADD UNIQUE KEY `id_usuario` (`id_usuario`);
ALTER TABLE `carrera` ADD PRIMARY KEY (`id_carrera`), ADD UNIQUE KEY `nombre` (`nombre`);
ALTER TABLE `estudiante` ADD PRIMARY KEY (`id_estudiante`), ADD UNIQUE KEY `id_usuario` (`id_usuario`), ADD KEY `id_carrera` (`id_carrera`);
ALTER TABLE `torre` ADD PRIMARY KEY (`id_torre`);
ALTER TABLE `piso` ADD PRIMARY KEY (`id_piso`), ADD KEY `id_torre` (`id_torre`);
ALTER TABLE `aula` ADD PRIMARY KEY (`id_aula`), ADD UNIQUE KEY `codigo` (`codigo`), ADD KEY `id_piso` (`id_piso`);
ALTER TABLE `materia` ADD PRIMARY KEY (`id_materia`), ADD UNIQUE KEY `codigo` (`codigo`), ADD KEY `id_docente` (`id_docente`);
ALTER TABLE `asignacion` ADD PRIMARY KEY (`id_asignacion`), ADD KEY `id_materia` (`id_materia`), ADD KEY `id_aula` (`id_aula`);
ALTER TABLE `ubicacion` ADD PRIMARY KEY (`id_ubicacion`), ADD KEY `id_estudiante` (`id_estudiante`);
ALTER TABLE `ruta` ADD PRIMARY KEY (`id_ruta`), ADD KEY `origen` (`origen`), ADD KEY `destino` (`destino`);
ALTER TABLE `consulta` ADD PRIMARY KEY (`id_consulta`), ADD KEY `id_estudiante` (`id_estudiante`);
ALTER TABLE `notificacion` ADD PRIMARY KEY (`id_notificacion`), ADD KEY `id_estudiante` (`id_estudiante`);
ALTER TABLE `reporte_soporte` ADD PRIMARY KEY (`id_reporte`), ADD KEY `id_estudiante` (`id_estudiante`);

-- AUTO_INCREMENT

ALTER TABLE `rol` MODIFY `id_rol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
ALTER TABLE `usuario` MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
ALTER TABLE `administrador` MODIFY `id_admin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
ALTER TABLE `docente` MODIFY `id_docente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
ALTER TABLE `carrera` MODIFY `id_carrera` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
ALTER TABLE `estudiante` MODIFY `id_estudiante` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
ALTER TABLE `torre` MODIFY `id_torre` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
ALTER TABLE `piso` MODIFY `id_piso` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
ALTER TABLE `aula` MODIFY `id_aula` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
ALTER TABLE `materia` MODIFY `id_materia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
ALTER TABLE `asignacion` MODIFY `id_asignacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
ALTER TABLE `ubicacion` MODIFY `id_ubicacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
ALTER TABLE `ruta` MODIFY `id_ruta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
ALTER TABLE `consulta` MODIFY `id_consulta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
ALTER TABLE `notificacion` MODIFY `id_notificacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
ALTER TABLE `reporte_soporte` MODIFY `id_reporte` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

-- Restricciones (Foreign Keys) - Con ON DELETE CASCADE ON UPDATE CASCADE en todas

ALTER TABLE `usuario`
  ADD CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`id_rol`) REFERENCES `rol` (`id_rol`) ON UPDATE CASCADE;

ALTER TABLE `administrador`
  ADD CONSTRAINT `administrador_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `docente`
  ADD CONSTRAINT `docente_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `estudiante`
  ADD CONSTRAINT `estudiante_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `estudiante_ibfk_2` FOREIGN KEY (`id_carrera`) REFERENCES `carrera` (`id_carrera`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `piso`
  ADD CONSTRAINT `piso_ibfk_1` FOREIGN KEY (`id_torre`) REFERENCES `torre` (`id_torre`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `aula`
  ADD CONSTRAINT `aula_ibfk_1` FOREIGN KEY (`id_piso`) REFERENCES `piso` (`id_piso`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `materia`
  ADD CONSTRAINT `materia_ibfk_1` FOREIGN KEY (`id_docente`) REFERENCES `docente` (`id_docente`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `asignacion`
  ADD CONSTRAINT `asignacion_ibfk_1` FOREIGN KEY (`id_materia`) REFERENCES `materia` (`id_materia`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `asignacion_ibfk_2` FOREIGN KEY (`id_aula`) REFERENCES `aula` (`id_aula`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `ubicacion`
  ADD CONSTRAINT `ubicacion_ibfk_1` FOREIGN KEY (`id_estudiante`) REFERENCES `estudiante` (`id_estudiante`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `ruta`
  ADD CONSTRAINT `ruta_ibfk_1` FOREIGN KEY (`origen`) REFERENCES `ubicacion` (`id_ubicacion`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ruta_ibfk_2` FOREIGN KEY (`destino`) REFERENCES `ubicacion` (`id_ubicacion`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `consulta`
  ADD CONSTRAINT `consulta_ibfk_1` FOREIGN KEY (`id_estudiante`) REFERENCES `estudiante` (`id_estudiante`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `notificacion`
  ADD CONSTRAINT `notificacion_ibfk_1` FOREIGN KEY (`id_estudiante`) REFERENCES `estudiante` (`id_estudiante`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `reporte_soporte`
  ADD CONSTRAINT `reporte_soporte_ibfk_1` FOREIGN KEY (`id_estudiante`) REFERENCES `estudiante` (`id_estudiante`) ON DELETE CASCADE ON UPDATE CASCADE;

COMMIT;

