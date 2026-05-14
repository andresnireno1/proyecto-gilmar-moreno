package com.example.demo.repository;

import com.example.demo.model.Docente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DocenteRepository extends JpaRepository<Docente, Integer> {
    Docente findByCorreo(String correo);
}