<?php

use App\Http\Controllers\Auth\GoogleController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

// Rota para acessar o client-side e server-side
Route::get('/', HomeController::class)->name('home');

// Rota para acessar apenas a API
Route::prefix('api')->group(function () {
    Route::middleware('auth')->group(function () {
        Route::apiResource('users', UserController::class);
    });

    Route::middleware('guest')->group(function () {
        Route::post('login', [LoginController::class, 'store']);
        Route::post('register', [RegisterController::class, 'store']);
        Route::get('auth/google', [GoogleController::class, 'redirectToGoogle'])->name('auth.google');
        Route::get('auth/google/callback', [GoogleController::class, 'handleGoogleCallback']);
    });
});

// Rotas para autenticação
Route::middleware('auth')->group(function () {
    Route::get('dashboard', DashboardController::class)->name('dashboard');
    Route::post('logout', [LoginController::class, 'destroy'])->name('logout');
    Route::get('profile', ProfileController::class)->name('profile');
});

Route::middleware('guest')->group(function () {
    Route::get('login', [LoginController::class, 'create'])->name('login');
    Route::get('register', [RegisterController::class, 'create'])->name('register');
});
