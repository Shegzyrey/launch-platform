package com.example.catalog.exception;

public class InsufficientStockException extends RuntimeException {
    public InsufficientStockException(String sku) {
        super("Insufficient stock for SKU: " + sku);
    }
}