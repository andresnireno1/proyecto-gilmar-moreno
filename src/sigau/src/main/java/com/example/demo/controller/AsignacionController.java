package com.example.demo.controller;

import com.example.demo.model.Asignacion;
import com.example.demo.service.AsignacionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/asignaciones")
@CrossOrigin(origins = "*")
public class AsignacionController {

    @Autowired
    private AsignacionService asignacionService;

    @GetMapping
    public List<Asignacion> listarTodos() {
        return asignacionService.listarTodos();
    }

    @GetMapping("/{id}")
    public Asignacion buscarPorId(@PathVariable Integer id) {
        return asignacionService.buscarPorId(id);
    }

    @GetMapping("/dia/{dia}")
    public List<Asignacion> buscarPorDia(@PathVariable String dia) {
        return asignacionService.buscarPorDia(dia);
    }

    @PostMapping
    public Asignacion guardar(@RequestBody Asignacion asignacion) {
        return asignacionService.guardar(asignacion);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Integer id) {
        asignacionService.eliminar(id);
    }
}
