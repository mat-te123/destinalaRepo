<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DestinationContent extends Model
{
    use HasFactory;

    protected $fillable = [
        'destination_id',
        'content_title',
        'content_desc',
        'content_image',
        'display_order',
    ];

    public function destination()
    {
        return $this->belongsTo(Destination::class);
    }
}
