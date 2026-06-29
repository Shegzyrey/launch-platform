package com.example.catalog.controller;

import com.example.catalog.dto.ReservationRequest;
import com.example.catalog.dto.ReservationResponse;
import com.example.catalog.service.InventoryReservationService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
public class InventoryReservationController {

    private final InventoryReservationService reservationService;

    public InventoryReservationController(InventoryReservationService reservationService) {
        this.reservationService = reservationService;
    }

    @PostMapping("/internal/inventory/reservations")
    public ResponseEntity<ReservationResponse> createReservation(
            @Valid @RequestBody ReservationRequest request
    ) {
        ReservationResponse response = reservationService.reserveStock(request);
        return ResponseEntity.status(201).body(response);
    }

    @GetMapping("/internal/inventory/reservations/{reservationId}")
    public ReservationResponse getReservation(@PathVariable UUID reservationId) {
        return reservationService.getReservation(reservationId);
    }

    @DeleteMapping("/internal/inventory/reservations/{reservationId}")
    public ResponseEntity<Void> cancelReservation(@PathVariable UUID reservationId) {
        reservationService.cancelReservation(reservationId);
        return ResponseEntity.noContent().build();
    }
}