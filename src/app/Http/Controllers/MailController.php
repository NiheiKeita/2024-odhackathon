<?php

namespace App\Http\Controllers;

use App\Models\Mail;
use Illuminate\Http\Request;

class MailController extends Controller
{
    public function add(Request $request): void
    {
        Mail::create([
            'email' => $request->from ?? "",
            'name' => $request->subject ?? "",
            'content' => $request->body ?? "",
        ]);
    }

}
