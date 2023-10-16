<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\Plan;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    public function index(Request $request)
    {
        $filter = $request->get('filter') ?? 'Both';
        return inertia('Backend/Booking/Index',[
            'list'=>Booking::query()
                ->when($filter!='Both',fn(Builder $builder)=>$builder->where('status',$filter))
                ->paginate(),
            'filter'=>$filter
        ]);
    }

    public function create(Request $request)
    {
        return inertia('Backend/Booking/Create',[
            'plans'=>Plan::query()->get(['id as value',''])
        ]);
    }

    public function book(Request $request)
    {
        $data=$this->validate($request, [
            'name' => 'required',
            'mobile' => 'required',
            'plan_id' => 'required'
        ]);
        Booking::query()->create(array_merge($data, $request->only(['note', 'address', 'email'])));
        session()->flash('flash-message',[
            'message'=>'Booking Submitted Successfully ! You may receive a phone call from our team, Please stay tune',
            'type'=>'positive'
        ]);
        return back();
    }

    public function store(Request $request)
    {
        $data=$this->validate($request, [
            'name' => 'required',
            'mobile' => 'required',
            'plan_id' => 'required'
        ]);
        Booking::query()->create(array_merge($data, $request->only(['note', 'address', 'email'])));
        session()->flash('flash-message',[
            'message'=>'Booking Deleted Successfully',
            'type'=>'positive'
        ]);
        return to_route('booking.index');
    }
    public function edit(Request $request, Booking $booking)
    {
        return inertia('Backend/Booking/Edit',[
            'data'=>$booking
        ]);
    }

    public function update(Request $request, Booking $booking)
    {
        $data=$this->validate($request, [
            'name' => 'required',
            'mobile' => 'required',
            'plan_id' => 'required'
        ]);
        Booking::query()->create(array_merge($data, $request->only(['note', 'address', 'email','status'])));

        session()->flash('flash-message',[
            'message'=>'Booking Deleted Successfully',
            'type'=>'positive'
        ]);
        return to_route('booking.index');
    }

    public function destroy(Request $request, Booking $booking)
    {

        $booking->delete();
        session()->flash('flash-message',[
            'message'=>'Booking Deleted Successfully',
            'type'=>'positive'
        ]);
        return to_route('booking.index');
    }


}
