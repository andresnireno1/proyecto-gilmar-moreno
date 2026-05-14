package com.example.demo.service;

import com.example.demo.model.Asignacion;
import com.example.demo.repository.AsignacionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class AsignacionService {

    @Autowired
    private AsignacionRepository asignacionRepository;

    public List<Asignacion> listarTodos() {
        return asignacionRepository.findAll();
    }

    public Asignacion buscarPorId(Integer id) {
        return asignacionRepository.findById(id).orElse(null);
    }

    public List<Asignacion> buscarPorMateria(Integer idMateria) {
        return asignacionRepository.findByMateriaIdMateria(idMateria);
    }

    public List<Asignacion> buscarPorAula(Integer idAula) {
        return asignacionRepository.findByAulaIdAula(idAula);
    }

    public List<Asignacion> buscarPorDia(String dia) {
        return asignacionRepository.findByDia(dia);
    }

    public Asignacion guardar(Asignacion asignacion) {
        return asignacionRepository.save(asignacion);
    }

    public void eliminar(Integer id) {
        asignacionRepository.deleteById(id);
    }
}