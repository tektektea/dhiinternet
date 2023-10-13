<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    use HasFactory;

    const PRIVACY = 'privacy';
    const TERM = 'term';
    const ABOUT = 'about';
    const REFUND = 'refund';

    protected $fillable = ['title', 'type', 'content'];
}
