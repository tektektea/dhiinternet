<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Models\Testimony;
use Illuminate\Http\Request;

class TestimonyController extends Controller
{
    public function index(Request $request)
    {
        return inertia('Backend/Testimony/Index', [
            'list' => Testimony::query()->get(),
        ]);
    }

    public function create(Request $request)
    {
        return inertia('Backend/Testimony/Create');
    }

    public function edit(Request $request, Testimony $testimony)
    {
        return inertia('Backend/Testimony/Edit', [
            'item'=>$testimony
        ]);
    }

    public function store(Request $request)
    {

        $data=$this->validate($request, [
            'url' => 'required',
            'content' => 'required',
        ]);
        Testimony::query()->create($data);
        session()->flash('flash-message',[
            'message'=>'Testimony Created Successfully',
            'type'=>'positive'
        ]);
        return to_route('testimony.index');

    }

    public function update(Request $request, Testimony $testimony)
    {
        $data=$this->validate($request, [
            'url' => 'required',
            'content' => 'required'
        ]);
        $testimony->update($data);
        session()->flash('flash-message',[
            'message'=>'Testimony Updated Successfully',
            'type'=>'positive'
        ]);
        return to_route('testimony.index');
    }

    public function destroy(Request $request,Testimony $testimony)
    {
        $testimony->delete();
        session()->flash('flash-message',[
            'message'=>'Testimony Deleted Successfully',
            'type'=>'positive'
        ]);
        return to_route('testimony.index');
    }
}
