package com.example.demo.controller;

import com.example.demo.model.Notificacion;
import com.example.demo.service.NotificacionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/notificaciones")
@CrossOrigin(origins = "*")
public class NotificacionController {

    @Autowired
    private NotificacionService notificacionService;

    @GetMapping
    public List<Notificacion> listarTodos() {
        return notificacionService.listarTodos();
    }

    @GetMapping("/{id}")
    public Notificacion buscarPorId(@PathVariable Integer id) {
        return notificacionService.buscarPorId(id);
    }

    @GetMapping("/estudiante/{idEstudiante}")
    public List<Notificacion> buscarPorEstudiante(@PathVariable Integer idEstudiante) {
        return notificacionService.buscarPorEstudiante(idEstudiante);
    }

    @PostMapping
    public Notificacion guardar(@RequestBody Notificacion notificacion) {
        return notificacionService.guardar(notificacion);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Integer id) {
        notificacionService.eliminar(id);
    }
}