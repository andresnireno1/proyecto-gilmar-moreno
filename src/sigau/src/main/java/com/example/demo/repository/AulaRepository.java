package com.example.demo.repository;

import com.example.demo.model.Aula;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface AulaRepository extends JpaRepository<Aula, Integer> {
    List<Aula> findByPisoIdPiso(Integer idPiso);
    Aula findByCodigo(String codigo);
}
