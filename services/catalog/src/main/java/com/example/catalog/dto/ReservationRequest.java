package com.example.catalog.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record ReservationRequest(
        @NotBlank String sku,
        @NotBlank String orderReference,
        @NotNull @Min(1) Integer quantity,
        String correlationId
) {
}