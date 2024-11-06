<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::post('/user/create', [App\Http\Controllers\AuthenticationController::class, 'create']);


Route::middleware('auth:sanctum')->group(function () {
    Route::get('/api-requests', [App\Http\Controllers\ApiRequestController::class, 'index']);
    Route::post('/api-requests', [App\Http\Controllers\ApiRequestController::class, 'store']);
    Route::get('/api-requests/{id}', [App\Http\Controllers\ApiRequestController::class, 'show']);
    Route::put('/api-requests/{id}', [App\Http\Controllers\ApiRequestController::class, 'update']);
    Route::delete('/api-requests/{id}', [App\Http\Controllers\ApiRequestController::class, 'destroy']);
});
