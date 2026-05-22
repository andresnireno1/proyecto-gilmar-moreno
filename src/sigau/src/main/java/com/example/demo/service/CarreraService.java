package com.example.demo.service;

import com.example.demo.model.Carrera;
import com.example.demo.repository.CarreraRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CarreraService {

    @Autowired
    private CarreraRepository carreraRepository;

    public List<Carrera> listarTodos() {
        return carreraRepository.findAll();
    }

    public Carrera buscarPorId(Integer id) {
        return carreraRepository.findById(id).orElse(null);
    }

    public Carrera guardar(Carrera carrera) {
        return carreraRepository.save(carrera);
    }

    public void eliminar(Integer id) {
        carreraRepository.deleteById(id);
    }
}