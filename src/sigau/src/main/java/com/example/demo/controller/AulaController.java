package com.example.demo.controller;

import com.example.demo.model.Aula;
import com.example.demo.service.AulaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/aulas")
@CrossOrigin(origins = "*")
public class AulaController {

    @Autowired
    private AulaService aulaService;

    @GetMapping
    public List<Aula> listarTodos() {
        return aulaService.listarTodos();
    }

    @GetMapping("/{id}")
    public Aula buscarPorId(@PathVariable Integer id) {
        return aulaService.buscarPorId(id);
    }

    @GetMapping("/codigo/{codigo}")
    public Aula buscarPorCodigo(@PathVariable String codigo) {
        return aulaService.buscarPorCodigo(codigo);
    }

    @GetMapping("/piso/{idPiso}")
    public List<Aula> buscarPorPiso(@PathVariable Integer idPiso) {
        return aulaService.buscarPorPiso(idPiso);
    }

    @PostMapping
    public Aula guardar(@RequestBody Aula aula) {
        return aulaService.guardar(aula);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Integer id) {
        aulaService.eliminar(id);
    }
}