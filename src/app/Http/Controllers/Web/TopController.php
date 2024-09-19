<?php

namespace App\Http\Controllers\Web;

use App\Services\NotionApi;
use App\Http\Controllers\Controller;
use App\Jobs\SendTestEmail;
use Inertia\Inertia;
use Inertia\Response;

class TopController extends Controller
{
    public function index(): Response
    {
        SendTestEmail::dispatch("ss", "sssss");
        // $codeCheck = new NotionApi();
        // $codeCheck->getBuildings();
        // dd($codeCheck->getBuildings());
        return Inertia::render('Web/Top');
    }
}
