<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class MyPageController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Web/MyPage');
    }

    public function store(): Response
    {
        return Inertia::render('Web/MyPage');
    }
}
