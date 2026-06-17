<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    protected $fillable = [
        'main_title',
        'main_desc',
        'main_image',
    ];

    public function serviceContents()
    {
        return $this->hasMany(ServiceContent::class, );
    }

    public function packages()
    {
        return $this->belongsToMany(Package::class, 'service_package', 'service_id', 'package_id');
    }
}
