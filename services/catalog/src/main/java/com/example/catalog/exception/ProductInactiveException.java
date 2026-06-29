package com.example.catalog.exception;

public class ProductInactiveException extends RuntimeException {
    public ProductInactiveException(String sku) {
        super("Product is inactive for SKU: " + sku);
    }
}