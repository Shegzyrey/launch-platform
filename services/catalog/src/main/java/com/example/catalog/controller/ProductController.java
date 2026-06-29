package com.example.catalog.controller;

import com.example.catalog.dto.ProductResponse;
import com.example.catalog.service.ProductService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/internal/products/{sku}")
    public ProductResponse getProductBySku(@PathVariable String sku) {
        return productService.getProductBySku(sku);
    }
}