<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PackageContent extends Model
{
    use HasFactory;

    protected $fillable = [
        'package_id',
        'content_title',
        'content_desc',
        'content_image',
        'display_order',
    ];

    public function package()
    {
        return $this->belongsTo(Package::class);
    }
}
