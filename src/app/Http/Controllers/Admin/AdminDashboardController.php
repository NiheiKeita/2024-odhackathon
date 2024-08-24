<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
// use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class AdminDashboardController extends Controller
{
    /**
     * Display the registration view.
     */
    public function index(): Response
    {
        // dump(Auth::guard("admin")->user());
        return Inertia::render('Admin/Dashboard');
    }
}
