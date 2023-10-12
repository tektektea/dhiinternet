<?php

namespace App\Http\Controllers;

use App\Models\Plan;
use App\Models\Section;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function home(Request $request)
    {
        return inertia('Front/Home',[
            'sections' => Section::query()->get(),
            'plans' => Plan::query()->get(),
        ]);
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
