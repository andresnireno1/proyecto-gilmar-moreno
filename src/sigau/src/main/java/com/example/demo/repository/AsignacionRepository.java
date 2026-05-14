package com.example.demo.repository;

import com.example.demo.model.Asignacion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface AsignacionRepository extends JpaRepository<Asignacion, Integer> {
    List<Asignacion> findByMateriaIdMateria(Integer idMateria);
    List<Asignacion> findByAulaIdAula(Integer idAula);
    List<Asignacion> findByDia(String dia);
}