<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PageController extends Controller
{
    public function home(Request $request)
    {
        return inertia('Front/Home',[]);
    }
    public function contact(Request $request)
    {
        return inertia('Front/ContactPage',[]);
    }
    public function about(Request $request)
    {
        return inertia('Front/ContactPage',[]);
    }
    public function booking(Request $request)
    {
        return inertia('Front/ContactPage',[]);
    }
}
