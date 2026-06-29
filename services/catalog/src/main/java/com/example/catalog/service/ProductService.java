package com.example.catalog.service;

import com.example.catalog.dto.ProductResponse;
import com.example.catalog.entity.Product;
import com.example.catalog.exception.ProductInactiveException;
import com.example.catalog.exception.ProductNotFoundException;
import com.example.catalog.repository.ProductRepository;
import org.springframework.stereotype.Service;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public ProductResponse getProductBySku(String sku) {
        Product product = productRepository.findBySku(sku)
                .orElseThrow(() -> new ProductNotFoundException(sku));

        if (!product.isActive()) {
            throw new ProductInactiveException(sku);
        }

        return new ProductResponse(
                product.getSku(),
                product.getName(),
                product.getStatus(),
                product.getPriceMinor(),
                product.getCurrency()
        );
    }
}