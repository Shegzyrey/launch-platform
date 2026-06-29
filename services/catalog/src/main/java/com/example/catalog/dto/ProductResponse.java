package com.example.catalog.dto;

public record ProductResponse(
        String sku,
        String name,
        String status,
        Integer priceMinor,
        String currency
) {
}