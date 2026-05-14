package com.example.demo.service;

import com.example.demo.model.ReporteSoporte;
import com.example.demo.repository.ReporteSoporteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ReporteSoporteService {

    @Autowired
    private ReporteSoporteRepository reporteSoporteRepository;

    public List<ReporteSoporte> listarTodos() {
        return reporteSoporteRepository.findAll();
    }

    public ReporteSoporte buscarPorId(Integer id) {
        return reporteSoporteRepository.findById(id).orElse(null);
    }

    public List<ReporteSoporte> buscarPorEstudiante(Integer idEstudiante) {
        return reporteSoporteRepository.findByEstudianteIdEstudiante(idEstudiante);
    }

    public ReporteSoporte guardar(ReporteSoporte reporte) {
        return reporteSoporteRepository.save(reporte);
    }

    public void eliminar(Integer id) {
        reporteSoporteRepository.deleteById(id);
    }
}