package com.example.catalog.repository;

import com.example.catalog.entity.Inventory;
import jakarta.persistence.LockModeType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;

import java.util.Optional;
import java.util.UUID;

public interface InventoryRepository extends JpaRepository<Inventory, UUID> {

    @Lock(LockModeType.PESSIMISTIC_WRITE)
    Optional<Inventory> findBySku(String sku);
}