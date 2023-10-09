<?php

namespace App\Http\Controllers;

use App\Models\Section;
use Illuminate\Http\Request;

class SectionController extends Controller
{
    public function index(Request $request)
    {

        return inertia('Backend/Section/Index',[
            'list' => Section::query()->orderBy('order')->get(),
        ]);
    }

    public function create(Request $request)
    {
        return inertia('Backend/Section/Create', [

        ]);
    }

    public function store(Request $request)
    {
        $data=$this->validate($request, [
            'name' => 'required',
            'order' => 'required',
            'content' => 'required'
        ]);
        Section::query()->create($data);
        session()->flash('flash-message',[
            'message'=>'Section Created Successfully',
            'type'=>'positive'
        ]);
    }

    public function edit(Request $request,Section $section)
    {

    }

    public function update(Request $request,Section $section)
    {

    }

    public function destroy(Request $request, Section $section)
    {

    }
}
