package com.example.demo.repository;

import com.example.demo.model.Torre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TorreRepository extends JpaRepository<Torre, Integer> {
}