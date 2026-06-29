package com.example.catalog.controller;

import java.util.Map;
import java.time.Instant;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

  @GetMapping("/")
  public String index() {
    return "Greetings from Spring Boot!";
  }

  @GetMapping("/healthz")
  public Map<String, Object> healthz() {
    return Map.of(
      "status", "UP",
      "service", "catalog-service",
      "timestamp", Instant.now().toString()
    );
  }

  @GetMapping("/readyz")
  public Map<String, Object> readyz() {
    return Map.of(
      "status", "UP",
      "service", "catalog-service",
      "timestamp", Instant.now().toString()
    );
  }
}