<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;

class AccountSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Role::query()->upsert([
            ['id'=>1,'guard_name'=>'web','name'=>'admin'],
            ['id'=>2,'guard_name'=>'web','name'=>'staff'],
        ],['id']);


        $user=User::query()->updateOrCreate(
            ['id' => 1],
            [
                'id'=>1,
                'name'=>'Admin',
                'mobile'=>'000000001',
                'email'=>'admin@email.com',
                'password'=>Hash::make('password')
            ]
        );
        $user->roles()->sync([1]);
    }
}
