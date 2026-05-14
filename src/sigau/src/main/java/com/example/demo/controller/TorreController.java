package com.example.demo.controller;

import com.example.demo.model.Torre;
import com.example.demo.service.TorreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/torres")
@CrossOrigin(origins = "*")
public class TorreController {

    @Autowired
    private TorreService torreService;

    @GetMapping
    public List<Torre> listarTodos() {
        return torreService.listarTodos();
    }

    @GetMapping("/{id}")
    public Torre buscarPorId(@PathVariable Integer id) {
        return torreService.buscarPorId(id);
    }

    @PostMapping
    public Torre guardar(@RequestBody Torre torre) {
        return torreService.guardar(torre);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Integer id) {
        torreService.eliminar(id);
    }
}
