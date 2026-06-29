package com.example.catalog.repository;

import com.example.catalog.entity.InventoryReservation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface InventoryReservationRepository extends JpaRepository<InventoryReservation, UUID> {
}