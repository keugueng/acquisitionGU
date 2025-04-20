<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


use App\Http\Controllers\Api\UtilisateurController;
use App\Http\Controllers\Api\GuichetController;
use App\Http\Controllers\Api\ClientController;
use App\Http\Controllers\Api\LogementController;
use App\Http\Controllers\Api\DossierController;
use App\Http\Controllers\Api\DocumentController;
use App\Http\Controllers\Api\PaiementController;
use App\Http\Controllers\Api\PretController;
use App\Http\Controllers\Api\NotificationController;
use App\Http\Controllers\Api\CommissionController;
use App\Http\Controllers\Api\ContratReservationController;
use App\Http\Controllers\Api\ActeVenteController;
use App\Http\Controllers\Api\VisiteController;
use App\Http\Controllers\Api\EnfantController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
// Route::middleware('auth:sanctum')->group(function () {
//     Route::apiResource('utilisateurs', UtilisateurController::class);
//     Route::apiResource('guichets', GuichetController::class);
//     // Ajoutez les autres routes protégées
// });

// Auth endpoints (public)
use App\Http\Controllers\AuthController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Authenticated endpoints
Route::group([], function () {
    Route::middleware('auth:sanctum')->group(function () {
        Route::get('/user', function (Request $request) {
            return $request->user();
        });
        Route::post('/logout', [AuthController::class, 'logout']);
        Route::apiResource('utilisateurs', UtilisateurController::class);
        Route::apiResource('guichets', GuichetController::class);
        Route::apiResource('clients', ClientController::class);
        Route::apiResource('logements', LogementController::class);
        Route::apiResource('dossiers', DossierController::class);
        Route::apiResource('documents', DocumentController::class);
        Route::apiResource('paiements', PaiementController::class);
        Route::apiResource('prets', PretController::class);
        Route::apiResource('notifications', NotificationController::class);
        Route::apiResource('commissions', CommissionController::class);
        Route::apiResource('contrats_reservation', ContratReservationController::class);
        Route::apiResource('actes_vente', ActeVenteController::class);
        Route::apiResource('visites', VisiteController::class);
        Route::apiResource('enfants', EnfantController::class);
    });
});
