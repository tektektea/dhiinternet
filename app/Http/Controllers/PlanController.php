<?php

namespace App\Http\Controllers;

use App\Models\Plan;
use App\Models\Section;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class PlanController extends Controller
{
    public function index(Request $request)
    {
        return inertia('Backend/Plan/Index', [
            'list' => Plan::query()->get(),
        ]);
    }

    public function create(Request $request)
    {
        return inertia('Backend/Plan/Create');
    }

    public function edit(Request $request, Plan $plan)
    {
        return inertia('Backend/Plan/Edit', [
            'item'=>$plan
        ]);
    }

    public function store(Request $request)
    {

        $data=$this->validate($request, [
            'name' => 'required',
            'fee' => 'required:numeric',
            'card' => 'required'
        ]);
        Plan::query()->create($data);
        session()->flash('flash-message',[
            'message'=>'Section Created Successfully',
            'type'=>'positive'
        ]);
        return to_route('plan.index');

    }

    public function update(Request $request, Plan $plan)
    {
        $data=$this->validate($request, [
            'name' => 'required',
            'fee' => 'required:numeric',
            'card' => 'required'
        ]);
        $plan->update($data);
        session()->flash('flash-message',[
            'message'=>'Section Updated Successfully',
            'type'=>'positive'
        ]);
        return to_route('plan.index');
    }

    public function destroy(Request $request, Plan $plan)
    {
        $plan->delete();
        session()->flash('flash-message',[
            'message'=>'Section Deleted Successfully',
            'type'=>'positive'
        ]);
        return to_route('plan.index');
    }


}
