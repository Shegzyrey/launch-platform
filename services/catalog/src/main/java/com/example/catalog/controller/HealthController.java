package com.example.catalog.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.sql.DataSource;
import java.sql.Connection;
import java.time.Instant;
import java.util.Map;

@RestController
public class HealthController {

    private final DataSource dataSource;

    public HealthController(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    @GetMapping("/healthz")
    public ResponseEntity<Map<String, Object>> healthz() {
        return ResponseEntity.ok(Map.of(
                "status", "UP",
                "service", "catalog-service",
                "timestamp", Instant.now().toString()
        ));
    }

    @GetMapping("/readyz")
    public ResponseEntity<Map<String, Object>> readyz() {
        try (Connection connection = dataSource.getConnection()) {
            return ResponseEntity.ok(Map.of(
                    "status", "READY",
                    "database", "UP",
                    "service", "catalog-service",
                    "timestamp", Instant.now().toString()
            ));
        } catch (Exception ex) {
            return ResponseEntity.status(503).body(Map.of(
                    "status", "NOT_READY",
                    "database", "DOWN",
                    "service", "catalog-service",
                    "timestamp", Instant.now().toString()
            ));
        }
    }
}