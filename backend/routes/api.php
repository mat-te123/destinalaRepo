<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ServiceController;
use App\Http\Controllers\Api\PackageController;
use App\Http\Controllers\Api\TestimonialController;
use App\Http\Controllers\Api\FaqController;
use App\Http\Controllers\Api\ProfileController;

// Login Rahasia (Admin harus tahu Slug perusahaannya)
Route::post('/admin/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->prefix('admin')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    
    // Manajemen Website
    Route::get('/profile', [ProfileController::class, 'show']);
    Route::put('/profile', [ProfileController::class, 'update']);

    // CRUD Resource
    Route::apiResource('services', ServiceController::class);
    Route::apiResource('packages', PackageController::class);
    Route::apiResource('testimonials', TestimonialController::class);
    Route::apiResource('faqs', FaqController::class);
});