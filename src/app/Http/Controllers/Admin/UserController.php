<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function index(): Response
    {
        return Inertia::render('Admin/UserList');
    }
}
