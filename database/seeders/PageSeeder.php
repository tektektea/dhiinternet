<?php

namespace Database\Seeders;

use App\Models\Page;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Page::query()->upsert([
            ['id' => 1, 'title' => 'Privacy Policy', 'type' => Page::PRIVACY, 'content' => 'NA'],
            ['id' => 2, 'title' => 'Term And Condition', 'type' => Page::TERM, 'content' => 'NA'],
            ['id' => 3, 'title' => 'Refund Policy', 'type' => Page::REFUND, 'content' => 'NA'],
            ['id' => 4, 'title' => 'About us', 'type' => Page::ABOUT, 'content' => 'NA']
        ], ['id']);
    }
}
