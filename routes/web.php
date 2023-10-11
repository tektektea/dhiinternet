<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\SectionController;
use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::controller(PageController::class)->group(function (){
    Route::get('/', 'home')->name('page.home');
    Route::get('/contact', 'contact')->name('page.contact');
    Route::get('/about', 'about')->name('page.about');
    Route::get('/booking', 'booking')->name('page.booking');
    Route::get('/privacy', 'booking')->name('page.privacy');
    Route::get('/term', 'booking')->name('page.term');
    Route::get('/refund', 'booking')->name('page.refund');
    Route::get('/about', 'booking')->name('page.about');
});
Route::get('/dashboard', [DashboardController::class,'index'])->name('dashboard');
Route::group(['prefix'=>'auth',], function () {
    Route::get('login',[\App\Http\Controllers\Auth\AuthenticatedSessionController::class,'create'])->name('login');
    Route::post('login', [\App\Http\Controllers\Auth\AuthenticatedSessionController::class, 'store'])->name('login.store');
    Route::delete('login', [\App\Http\Controllers\Auth\AuthenticatedSessionController::class, 'destroy'])->name('login.destroy');
});
Route::group(['prefix'=>'admin','middleware' => ['auth']], function () {
    Route::resource('section', SectionController::class);
    Route::resource('user', SectionController::class);
    Route::get('role', [RoleController::class,'index'])->name('role.index');

});

//Route::get('/dashboard', function () {
//    return Inertia::render('Dashboard');
//})->middleware(['auth', 'verified'])->name('dashboard');
//
//Route::middleware('auth')->group(function () {
//    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
//});
//
//require __DIR__.'/auth.php';
