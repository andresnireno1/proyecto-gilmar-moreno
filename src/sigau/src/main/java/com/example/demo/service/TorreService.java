package com.example.demo.service;

import com.example.demo.model.Torre;
import com.example.demo.repository.TorreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TorreService {

    @Autowired
    private TorreRepository torreRepository;

    public List<Torre> listarTodos() {
        return torreRepository.findAll();
    }

    public Torre buscarPorId(Integer id) {
        return torreRepository.findById(id).orElse(null);
    }

    public Torre guardar(Torre torre) {
        return torreRepository.save(torre);
    }

    public void eliminar(Integer id) {
        torreRepository.deleteById(id);
    }
}