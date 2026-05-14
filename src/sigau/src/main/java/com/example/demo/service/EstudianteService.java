package com.example.demo.service;

import com.example.demo.model.Estudiante;
import com.example.demo.repository.EstudianteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class EstudianteService {

    @Autowired
    private EstudianteRepository estudianteRepository;

    public List<Estudiante> listarTodos() {
        return estudianteRepository.findAll();
    }

    public Estudiante buscarPorId(Integer id) {
        return estudianteRepository.findById(id).orElse(null);
    }

    public Estudiante buscarPorUsuario(Integer idUsuario) {
        return estudianteRepository.findByUsuarioIdUsuario(idUsuario);
    }

    public Estudiante guardar(Estudiante estudiante) {
        return estudianteRepository.save(estudiante);
    }

    public void eliminar(Integer id) {
        estudianteRepository.deleteById(id);
    }
}