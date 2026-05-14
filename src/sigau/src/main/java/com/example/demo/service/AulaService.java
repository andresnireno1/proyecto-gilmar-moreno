package com.example.demo.service;

import com.example.demo.model.Aula;
import com.example.demo.repository.AulaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class AulaService {

    @Autowired
    private AulaRepository aulaRepository;

    public List<Aula> listarTodos() {
        return aulaRepository.findAll();
    }

    public Aula buscarPorId(Integer id) {
        return aulaRepository.findById(id).orElse(null);
    }

    public Aula buscarPorCodigo(String codigo) {
        return aulaRepository.findByCodigo(codigo);
    }

    public List<Aula> buscarPorPiso(Integer idPiso) {
        return aulaRepository.findByPisoIdPiso(idPiso);
    }

    public Aula guardar(Aula aula) {
        return aulaRepository.save(aula);
    }

    public void eliminar(Integer id) {
        aulaRepository.deleteById(id);
    }
}
