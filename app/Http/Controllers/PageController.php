<?php

namespace App\Http\Controllers;

use App\Models\Page;
use App\Models\Plan;
use App\Models\Question;
use App\Models\Section;
use App\Models\Testimony;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function home(Request $request)
    {
        return inertia('Front/Home',[
            'sections' => Section::query()->get(),
            'plans' => Plan::query()->get(),
            'questions'=>Question::query()->get(),
            'testimonial' => Testimony::query()->get(),

        ]);
    }
    public function contact(Request $request)
    {
        return inertia('Front/ContactPage',[]);
    }
    public function refund(Request $request)
    {
        return inertia('Front/Refund',[
            'data' => Page::query()->where('type', Page::REFUND)->first(),
        ]);
    }
    public function term(Request $request)
    {
        return inertia('Front/Term',[
            'data'=>Page::query()->where('type',Page::TERM)->first()
        ]);
    }
    public function privacy(Request $request)
    {
        return inertia('Front/Privacy',[
            'data'=>Page::query()->where('type',Page::PRIVACY)->first()
        ]);
    }
    public function about(Request $request)
    {
        return inertia('Front/About',[
            'data'=>Page::query()->where('type',Page::ABOUT)->first()
        ]);
    }
    public function booking(Request $request)
    {
        return inertia('Front/Booking',[
            'plans'=>Plan::query()->get(['id as value','name as label'])
        ]);
    }

    public function index(Request $request)
    {

        return inertia('Backend/Page/Index', [
            'list'=>Page::query()->get()
        ]);
    }

    public function create(Request $request)
    {
        return inertia('Backend/Page/Create');
    }

    public function store(Request $request)
    {
        $data=$this->validate($request, [
            'title'=>'required',
            'type'=>'required',
            'content'=>'required',
        ]);
        Page::query()->create($data);
        session()->flash('flash-message',[
            'message'=>'Page Created Successfully',
            'type'=>'positive'
        ]);
        return to_route('page.index');
    }

    public function edit(Request $request, Page $page)
    {

        return inertia('Backend/Page/Edit', [
            'item'=>$page
        ]);

    }

    public function update(Request $request, Page $page)
    {
        $data=$this->validate($request, [
            'title'=>'required',
            'type'=>'required',
            'content'=>'required',
        ]);
        $page->update($data);
        session()->flash('flash-message',[
            'message'=>'Page Updated Successfully',
            'type'=>'positive'
        ]);
        return to_route('page.index');
    }

    public function destroy(Request $request, Page $page)
    {
        $page->delete();

        session()->flash('flash-message',[
            'message'=>'Page Deleted Successfully',
            'type'=>'positive'
        ]);
        return to_route('page.index');
    }



}
