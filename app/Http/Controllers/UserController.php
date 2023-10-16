<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $filter = $request->get('filter');
        return inertia('Backend/User/Index', [
            'list' => User::query()
                ->with(['roles'])
                ->whereHas('Roles', fn(Builder $builder) => $builder->whereIn('name',['staff','admin']))
                ->when($filter,fn(Builder $builder)=>$builder->where('name','LIKE',"%$filter%"))
                ->paginate(),
        ]);
    }

    public function create(Request $request)
    {
        return inertia('Backend/User/Create',[
            'roles'=>Role::query()->pluck('name')
        ]);
    }

    public function store(Request $request)
    {
        $data=$this->validate($request, [
            'name' => 'required',
            'email' => ['required', Rule::unique('users')],
            'mobile' => ['required', Rule::unique('users')],
            'role' => ['required'],
            'password' => 'required|confirmed'
        ]);
        $user=User::query()->create(array_merge($data,['password'=>Hash::make($data['password'])]));
        $user->assignRole($request->get('role'));

        session()->flash('flash-message',[
            'message'=>'Booking Deleted Successfully',
            'type'=>'positive'
        ]);
        return to_route('user.index');

    }

    public function edit(Request $request, User $user)
    {
        return inertia('Backend/User/Edit', [
            'data'=>$user,
            'role'=>Role::query()->pluck('name')
        ]);
    }

    public function update(Request $request, User $user)
    {
        $data=$this->validate($request, [
            'name' => 'required',
            'email' => ['required', Rule::unique('users')->ignore($user->id)],
            'mobile' => ['required', Rule::unique('users')->ignore($user->id)],
            'role' => ['required'],
        ]);
        DB::transaction(function () use ($request, $data) {
            $user=User::query()->create($data);
            $user->assignRole($request->get('role'));
            if ($request->has('password')) {
                $user->password = Hash::make($request->get('password'));
                $user->save();
            }
        });

        session()->flash('flash-message',[
            'message'=>'Booking Updated Successfully',
            'type'=>'positive'
        ]);
        return to_route('user.index');
    }

    public function destroy(Request $request, User $user)
    {
        $user->delete();
        session()->flash('flash-message',[
            'message'=>'User Deleted Successfully',
            'type'=>'positive'
        ]);
        return to_route('user.index');
    }
}

