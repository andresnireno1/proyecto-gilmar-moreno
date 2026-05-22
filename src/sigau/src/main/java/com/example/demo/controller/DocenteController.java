package com.example.demo.controller;

import com.example.demo.model.Docente;
import com.example.demo.service.DocenteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/docentes")
@CrossOrigin(origins = "*")
public class DocenteController {

    @Autowired
    private DocenteService docenteService;

    @GetMapping
    public List<Docente> listarTodos() {
        return docenteService.listarTodos();
    }

    @GetMapping("/{id}")
    public Docente buscarPorId(@PathVariable Integer id) {
        return docenteService.buscarPorId(id);
    }

    @PostMapping
    public Docente guardar(@RequestBody Docente docente) {
        return docenteService.guardar(docente);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Integer id) {
        docenteService.eliminar(id);
    }
}