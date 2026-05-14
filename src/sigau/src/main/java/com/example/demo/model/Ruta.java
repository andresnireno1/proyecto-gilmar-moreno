package com.example.demo.model;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "ruta")
public class Ruta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_ruta")
    private Integer idRuta;

    @Column(name = "distancia")
    private BigDecimal distancia;

    @Column(name = "tiempo_estimado")
    private BigDecimal tiempoEstimado;

    @ManyToOne
    @JoinColumn(name = "origen", nullable = false)
    private Ubicacion origen;

    @ManyToOne
    @JoinColumn(name = "destino", nullable = false)
    private Ubicacion destino;

    // Getters y Setters
    public Integer getIdRuta() { return idRuta; }
    public void setIdRuta(Integer idRuta) { this.idRuta = idRuta; }

    public BigDecimal getDistancia() { return distancia; }
    public void setDistancia(BigDecimal distancia) { this.distancia = distancia; }

    public BigDecimal getTiempoEstimado() { return tiempoEstimado; }
    public void setTiempoEstimado(BigDecimal tiempoEstimado) { this.tiempoEstimado = tiempoEstimado; }

    public Ubicacion getOrigen() { return origen; }
    public void setOrigen(Ubicacion origen) { this.origen = origen; }

    public Ubicacion getDestino() { return destino; }
    public void setDestino(Ubicacion destino) { this.destino = destino; }
}