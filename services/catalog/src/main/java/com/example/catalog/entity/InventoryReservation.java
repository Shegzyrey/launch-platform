package com.example.catalog.entity;

import jakarta.persistence.*;
import java.time.Instant;
import java.util.UUID;

@Entity
@Table(name = "inventory_reservations")
public class InventoryReservation {

    @Id
    private UUID id;

    @Column(nullable = false)
    private String sku;

    @Column(name = "order_reference", nullable = false)
    private String orderReference;

    @Column(nullable = false)
    private Integer quantity;

    @Column(nullable = false)
    private String status;

    @Column(name = "expires_at", nullable = false)
    private Instant expiresAt;

    @Column(name = "created_at", nullable = false)
    private Instant createdAt;

    @Column(name = "cancelled_at")
    private Instant cancelledAt;

    protected InventoryReservation() {
    }

    public InventoryReservation(String sku, String orderReference, Integer quantity, Instant expiresAt) {
        this.id = UUID.randomUUID();
        this.sku = sku;
        this.orderReference = orderReference;
        this.quantity = quantity;
        this.status = "reserved";
        this.expiresAt = expiresAt;
        this.createdAt = Instant.now();
    }

    public UUID getId() {
        return id;
    }

    public String getSku() {
        return sku;
    }

    public String getOrderReference() {
        return orderReference;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public String getStatus() {
        return status;
    }

    public Instant getExpiresAt() {
        return expiresAt;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public Instant getCancelledAt() {
        return cancelledAt;
    }

    public boolean isCancelled() {
        return "cancelled".equalsIgnoreCase(status);
    }

    public void cancel() {
        this.status = "cancelled";
        this.cancelledAt = Instant.now();
    }
}