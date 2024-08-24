<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AdminLoginController;
use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\Admin\AdminUserController;
use App\Http\Controllers\Admin\RegisteredUserController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Web\ApplicationController;
use App\Http\Controllers\Web\DashboardController;
use App\Http\Controllers\Web\HouseInquiryController;
use App\Http\Controllers\Web\MyPageController;
use App\Http\Controllers\Web\SearchController;
use App\Http\Controllers\Web\TopController;

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

Route::fallback(function () {
    return redirect(route('web.top'));
});

//Web画面側
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
Route::get('dashboard', [DashboardController::class, 'index'])->name('admin.dashboard.index');
Route::get('house_inquiry', [HouseInquiryController::class, 'index'])->name('web.house_inquiry.index');
Route::get('top', [TopController::class, 'index'])->name('web.top');
Route::get('my_page', [MyPageController::class, 'index'])->name('web.my_page');
Route::get('search', [SearchController::class, 'index'])->name('web.search');
Route::get('application', [ApplicationController::class, 'index'])->name('web.application');


//管理画面側
Route::get('admin/login', [AdminLoginController::class, 'index'])->name('admin.login');
Route::post('admin/login', [AdminLoginController::class, 'store'])->name('admin.login');
Route::middleware('guest.admin')->group(function () {
    Route::get('admin/dashboard', [AdminDashboardController::class, 'index'])->name('admin.dashboard.index');
    Route::get('admin/admin_users/add', [AdminUserController::class, 'create'])
                ->name('admin_user.create');
    Route::post('admin/admin_users/add', [AdminUserController::class, 'store']);

    Route::get('admin/users', [UserController::class, 'index']);
    Route::get('admin/users/add', [RegisteredUserController::class, 'create'])
                ->name('register');
    Route::post('admin/users/add', [RegisteredUserController::class, 'store']);
});

require __DIR__ . '/auth.php';
