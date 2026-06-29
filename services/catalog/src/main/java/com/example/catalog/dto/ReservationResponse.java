package com.example.catalog.dto;

import java.time.Instant;
import java.util.UUID;

public record ReservationResponse(
        UUID reservationId,
        String sku,
        String orderReference,
        Integer quantity,
        String status,
        Instant expiresAt
) {
}