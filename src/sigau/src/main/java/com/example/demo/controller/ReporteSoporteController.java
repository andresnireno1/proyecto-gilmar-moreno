package com.example.demo.controller;

import com.example.demo.model.ReporteSoporte;
import com.example.demo.service.ReporteSoporteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/reportes")
@CrossOrigin(origins = "*")
public class ReporteSoporteController {

    @Autowired
    private ReporteSoporteService reporteSoporteService;

    @GetMapping
    public List<ReporteSoporte> listarTodos() {
        return reporteSoporteService.listarTodos();
    }

    @GetMapping("/{id}")
    public ReporteSoporte buscarPorId(@PathVariable Integer id) {
        return reporteSoporteService.buscarPorId(id);
    }

    @GetMapping("/estudiante/{idEstudiante}")
    public List<ReporteSoporte> buscarPorEstudiante(@PathVariable Integer idEstudiante) {
        return reporteSoporteService.buscarPorEstudiante(idEstudiante);
    }

    @PostMapping
    public ReporteSoporte guardar(@RequestBody ReporteSoporte reporte) {
        return reporteSoporteService.guardar(reporte);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Integer id) {
        reporteSoporteService.eliminar(id);
    }
}