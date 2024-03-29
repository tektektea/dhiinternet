<?php

namespace App\Http\Controllers;

use App\Models\Section;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

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
            'order' => ['required',Rule::unique('sections')],
            'content' => 'required'
        ]);
        Section::query()->create($data);
        session()->flash('flash-message',[
            'message'=>'Section Created Successfully',
            'type'=>'positive'
        ]);
        return to_route('section.index');
    }

    public function edit(Request $request,Section $section)
    {
        return inertia('Backend/Section/Edit', [
            'item' => $section
        ]);
    }

    public function update(Request $request,Section $section)
    {
        $data=$this->validate($request, [
            'name' => 'required',
            'order' => ['required',Rule::unique('sections')->ignore($section->id)],
            'content' => 'required'
        ]);
        $section->update($data);

        session()->flash('flash-message',[
            'message'=>'Section Updated Successfully',
            'type'=>'positive'
        ]);
        return to_route('section.index');
    }

    public function destroy(Request $request, Section $section)
    {
        $section->delete();
        session()->flash('flash-message',[
            'message'=>'Section Deleted Successfully',
            'type'=>'positive'
        ]);
        return to_route('section.index');
    }
}
