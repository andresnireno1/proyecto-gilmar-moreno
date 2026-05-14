package com.example.demo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "torre")
public class Torre {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_torre")
    private Integer idTorre;

    @Column(name = "nombre", nullable = false, length = 100)
    private String nombre;

    @Column(name = "ubicacion", length = 100)
    private String ubicacion;

    @Column(name = "descripcion", length = 255)
    private String descripcion;

    public Integer getIdTorre() { return idTorre; }
    public void setIdTorre(Integer idTorre) { this.idTorre = idTorre; }

    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }

    public String getUbicacion() { return ubicacion; }
    public void setUbicacion(String ubicacion) { this.ubicacion = ubicacion; }

    public String getDescripcion() { return descripcion; }
    public void setDescripcion(String descripcion) { this.descripcion = descripcion; }
}