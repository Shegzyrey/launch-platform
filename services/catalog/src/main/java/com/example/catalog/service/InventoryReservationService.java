package com.example.catalog.service;

import com.example.catalog.dto.ReservationRequest;
import com.example.catalog.dto.ReservationResponse;
import com.example.catalog.entity.Inventory;
import com.example.catalog.entity.InventoryReservation;
import com.example.catalog.entity.Product;
import com.example.catalog.exception.InsufficientStockException;
import com.example.catalog.exception.ProductInactiveException;
import com.example.catalog.exception.ProductNotFoundException;
import com.example.catalog.exception.ReservationNotFoundException;
import com.example.catalog.repository.InventoryRepository;
import com.example.catalog.repository.InventoryReservationRepository;
import com.example.catalog.repository.ProductRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.UUID;

@Service
public class InventoryReservationService {

    private static final Logger logger = LoggerFactory.getLogger(InventoryReservationService.class);

    private final ProductRepository productRepository;
    private final InventoryRepository inventoryRepository;
    private final InventoryReservationRepository reservationRepository;

    public InventoryReservationService(
            ProductRepository productRepository,
            InventoryRepository inventoryRepository,
            InventoryReservationRepository reservationRepository
    ) {
        this.productRepository = productRepository;
        this.inventoryRepository = inventoryRepository;
        this.reservationRepository = reservationRepository;
    }

    @Transactional
    public ReservationResponse reserveStock(ReservationRequest request) {
        logger.info(
                "Reservation attempt started sku={} orderReference={} quantity={} correlationId={}",
                request.sku(),
                request.orderReference(),
                request.quantity(),
                request.correlationId()
        );

        Product product = productRepository.findBySku(request.sku())
                .orElseThrow(() -> new ProductNotFoundException(request.sku()));

        if (!product.isActive()) {
            throw new ProductInactiveException(request.sku());
        }

        Inventory inventory = inventoryRepository.findBySku(request.sku())
                .orElseThrow(() -> new InsufficientStockException(request.sku()));

        try {
            inventory.reserve(request.quantity());
        } catch (IllegalStateException ex) {
            throw new InsufficientStockException(request.sku());
        }

        InventoryReservation reservation = new InventoryReservation(
                request.sku(),
                request.orderReference(),
                request.quantity(),
                Instant.now().plus(15, ChronoUnit.MINUTES)
        );

        inventoryRepository.save(inventory);
        InventoryReservation savedReservation = reservationRepository.save(reservation);

        logger.info(
                "Reservation successful reservationId={} sku={} orderReference={} correlationId={}",
                savedReservation.getId(),
                request.sku(),
                request.orderReference(),
                request.correlationId()
        );

        return new ReservationResponse(
                savedReservation.getId(),
                savedReservation.getSku(),
                savedReservation.getOrderReference(),
                savedReservation.getQuantity(),
                savedReservation.getStatus(),
                savedReservation.getExpiresAt()
        );
    }

    @Transactional
    public void cancelReservation(UUID reservationId) {
        InventoryReservation reservation = reservationRepository.findById(reservationId)
                .orElseThrow(() -> new ReservationNotFoundException(reservationId));

        if (reservation.isCancelled()) {
            return;
        }

        Inventory inventory = inventoryRepository.findBySku(reservation.getSku())
                .orElseThrow(() -> new ReservationNotFoundException(reservationId));

        inventory.release(reservation.getQuantity());
        reservation.cancel();

        inventoryRepository.save(inventory);
        reservationRepository.save(reservation);

        logger.info(
                "Reservation cancelled reservationId={} sku={} orderReference={}",
                reservation.getId(),
                reservation.getSku(),
                reservation.getOrderReference()
        );
    }

    public ReservationResponse getReservation(UUID reservationId) {
        InventoryReservation reservation = reservationRepository.findById(reservationId)
                .orElseThrow(() -> new ReservationNotFoundException(reservationId));

        return new ReservationResponse(
                reservation.getId(),
                reservation.getSku(),
                reservation.getOrderReference(),
                reservation.getQuantity(),
                reservation.getStatus(),
                reservation.getExpiresAt()
        );
    }
}