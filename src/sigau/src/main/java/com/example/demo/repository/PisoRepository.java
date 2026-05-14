package com.example.demo.repository;

import com.example.demo.model.Piso;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface PisoRepository extends JpaRepository<Piso, Integer> {
    List<Piso> findByTorreIdTorre(Integer idTorre);
}