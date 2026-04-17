<?php

use Illuminate\Support\Facades\Route;

// Import Semua Controller
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ServiceController;
use App\Http\Controllers\Api\PackageController;
use App\Http\Controllers\Api\TestimonialController;
use App\Http\Controllers\Api\FaqController;
use App\Http\Controllers\Api\ProfileController;

/*
|--------------------------------------------------------------------------
| Public API Routes (Untuk Website Depan / Pengunjung)
|--------------------------------------------------------------------------
| Route di bawah ini digunakan oleh Frontend untuk menampilkan data ke publik.
| Karena pengunjung tidak login, filter TenantId biasanya dilakukan 
| berdasarkan URL Slug atau Domain melalui query parameter atau header.
*/

Route::prefix('v1/public')->group(function () {
    // Mengambil konfigurasi tampilan (Warna, Logo, Nama Menu/Alias)
    // Contoh: /api/v1/public/config?slug=perusahaan-a
    Route::get('/config', [ProfileController::class, 'showPublicConfig']);
    
    // Mengambil data konten untuk ditampilkan di landing page
    Route::get('/services', [ServiceController::class, 'indexPublic']);
    Route::get('/packages', [PackageController::class, 'indexPublic']);
    Route::get('/testimonials', [TestimonialController::class, 'indexPublic']);
    Route::get('/faqs', [FaqController::class, 'indexPublic']);
});

/*
|--------------------------------------------------------------------------
| Admin API Routes (Login & "Hidden" Access)
|--------------------------------------------------------------------------
| Bagian ini adalah untuk admin masing-masing perusahaan.
| URL login dibuat spesifik agar tidak mudah ditebak oleh publik.
*/

// 1. Route Autentikasi (Public - Tanpa Token)
Route::post('/admin/auth/login', [AuthController::class, 'login']);

// 2. Route Admin Terproteksi (Hanya Bisa Diakses Setelah Login)
Route::middleware('auth:sanctum')->prefix('admin')->group(function () {
    
    // Keluar dari sistem
    Route::post('/auth/logout', [AuthController::class, 'logout']);

    // Manajemen Profil & Kustomisasi (About, Contact, Labels)
    Route::get('/profile', [ProfileController::class, 'show']);
    Route::put('/profile', [ProfileController::class, 'update']);

    // CRUD Layanan (Services)
    Route::apiResource('services', ServiceController::class);

    // CRUD Paket Layanan (Packages)
    Route::apiResource('packages', PackageController::class);

    // CRUD Testimoni
    Route::apiResource('testimonials', TestimonialController::class);

    // CRUD FAQ (Help & Support)
    Route::apiResource('faqs', FaqController::class);

});