package com.example.demo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "piso")
public class Piso {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_piso")
    private Integer idPiso;

    @Column(name = "numero_piso", nullable = false)
    private Integer numeroPiso;

    @Column(name = "descripcion", length = 255)
    private String descripcion;

    @ManyToOne
    @JoinColumn(name = "id_torre", nullable = false)
    private Torre torre;

    // Getters y Setters
    public Integer getIdPiso() { return idPiso; }
    public void setIdPiso(Integer idPiso) { this.idPiso = idPiso; }

    public Integer getNumeroPiso() { return numeroPiso; }
    public void setNumeroPiso(Integer numeroPiso) { this.numeroPiso = numeroPiso; }

    public String getDescripcion() { return descripcion; }
    public void setDescripcion(String descripcion) { this.descripcion = descripcion; }

    public Torre getTorre() { return torre; }
    public void setTorre(Torre torre) { this.torre = torre; }
}