package com.example.demo.service;

import com.example.demo.model.Notificacion;
import com.example.demo.repository.NotificacionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class NotificacionService {

    @Autowired
    private NotificacionRepository notificacionRepository;

    public List<Notificacion> listarTodos() {
        return notificacionRepository.findAll();
    }

    public Notificacion buscarPorId(Integer id) {
        return notificacionRepository.findById(id).orElse(null);
    }

    public List<Notificacion> buscarPorEstudiante(Integer idEstudiante) {
        return notificacionRepository.findByEstudianteIdEstudiante(idEstudiante);
    }

    public Notificacion guardar(Notificacion notificacion) {
        return notificacionRepository.save(notificacion);
    }

    public void eliminar(Integer id) {
        notificacionRepository.deleteById(id);
    }
}