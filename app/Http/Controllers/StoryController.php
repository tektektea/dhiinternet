<?php

namespace App\Http\Controllers;

use App\Models\Story;
use Illuminate\Http\Request;

class StoryController extends Controller
{
    public function index(Request $request)
    {
        return inertia('Backend/Story/Index', [
            'list' => Story::query()->get(),
        ]);
    }

    public function create(Request $request)
    {
        return inertia('Backend/Story/Create');
    }

    public function store(Request $request)
    {
        $data=$this->validate($request, [
            'title' => 'required',
            'content' => 'required'
        ]);
        Story::query()->create($data);
        session()->flash('flash-message',[
            'message'=>'Story Created Successfully',
            'type'=>'positive'
        ]);
        return to_route('story.index');
    }

    public function edit(Request $request, Story $story)
    {
        return inertia('Backend/Story/Edit', [
            'item' => $story
        ]);
    }

    public function update(Request $request, Story $story)
    {

        $data=$this->validate($request, [
            'title' => 'required',
            'content' => 'required'
        ]);
        $story->update($data);
        session()->flash('flash-message',[
            'message'=>'Story Updated Successfully',
            'type'=>'positive'
        ]);
        return to_route('story.index');
    }
    public function destroy(Request $request, Story $story)
    {
        $story->delete();

        session()->flash('flash-message',[
            'message'=>'Page Deleted Successfully',
            'type'=>'positive'
        ]);
        return to_route('story.index');
    }

}
