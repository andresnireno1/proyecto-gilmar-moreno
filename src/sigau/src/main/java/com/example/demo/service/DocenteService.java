package com.example.demo.service;

import com.example.demo.model.Docente;
import com.example.demo.repository.DocenteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class DocenteService {

    @Autowired
    private DocenteRepository docenteRepository;

    public List<Docente> listarTodos() {
        return docenteRepository.findAll();
    }

    public Docente buscarPorId(Integer id) {
        return docenteRepository.findById(id).orElse(null);
    }

    public Docente buscarPorCorreo(String correo) {
        return docenteRepository.findByCorreo(correo);
    }

    public Docente guardar(Docente docente) {
        return docenteRepository.save(docente);
    }

    public void eliminar(Integer id) {
        docenteRepository.deleteById(id);
    }
}