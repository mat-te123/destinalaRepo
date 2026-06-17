<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServiceContent extends Model
{
    use HasFactory;

    protected $fillable = [
        'service_id',
        'content_title',
        'content_desc',
        'content_image',
        'display_order',
    ];

    public function service()
    {
        return $this->belongsTo(Service::class);
    }
}
