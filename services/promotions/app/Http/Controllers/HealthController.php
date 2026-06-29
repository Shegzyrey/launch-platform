<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;

class HealthController extends Controller
{
    public function healthz(): JsonResponse
    {
        return response()->json([
            'status' => 'ok',
            'service' => 'promotions',
        ]);
    }

    public function readyz(): JsonResponse
    {
        return response()->json([
            'status' => 'ok',
            'service' => 'promotions',
        ]);
    }
}
