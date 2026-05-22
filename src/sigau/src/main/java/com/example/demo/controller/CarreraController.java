package com.example.demo.controller;

import com.example.demo.model.Carrera;
import com.example.demo.service.CarreraService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/carreras")
@CrossOrigin(origins = "*")
public class CarreraController {

    @Autowired
    private CarreraService carreraService;

    @GetMapping
    public List<Carrera> listarTodos() {
        return carreraService.listarTodos();
    }

    @GetMapping("/{id}")
    public Carrera buscarPorId(@PathVariable Integer id) {
        return carreraService.buscarPorId(id);
    }

    @PostMapping
    public Carrera guardar(@RequestBody Carrera carrera) {
        return carreraService.guardar(carrera);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Integer id) {
        carreraService.eliminar(id);
    }
}