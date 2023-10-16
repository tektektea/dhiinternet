<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Booking extends Model
{
    use HasFactory;

    const UNCONFIRM = 'Unconfirmed';
    const CONFIRM = 'Confirmed';

    protected $fillable = ['name', 'mobile','address', 'email', 'plan_id', 'note'];

    public function plan(): BelongsTo
    {
        return $this->belongsTo(Plan::class);
    }
}
