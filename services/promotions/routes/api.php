<?php
use App\Http\Controllers\HealthController;
use Illuminate\Support\Facades\Route;

// Route::post('/promotions/validate', [PromotionCodeController::class, 'validateCode']);
Route::get('/healthz', [HealthController::class, 'healthz']);
Route::get('/readyz', [HealthController::class, 'readyz']);