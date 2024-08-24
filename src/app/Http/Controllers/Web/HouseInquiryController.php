<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class HouseInquiryController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Web/HouseInquiry');
    }

    public function complete(): Response
    {
        return Inertia::render('Web/HouseInquiry');
    }

    public function store(): Response
    {
        return Inertia::render('Web/HouseInquiry');
    }
}
