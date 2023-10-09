<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class AccountSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Role::query()->upsert([
            ['id'=>1,'guard'=>'web','name'=>'admin'],
        ],['id']);


        $user=User::query()->updateOrCreate([
            ['id' => '1'],
            [
                'id'=>'admin',
                'mobile'=>'000000000',
                'email'=>'admin@email.com',
                'password'=>bcrypt('password')
            ]
        ]);
        $user->roles()->sync([1]);
    }
}
