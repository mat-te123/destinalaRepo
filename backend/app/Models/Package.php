<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Package extends Model
{
    use HasFactory;

    protected $fillable = [
        'destination_id',
        'main_title',
        'main_desc',
        'main_image',
        'package_video',
    ];

    public function destination()
    {
        return $this->belongsTo(Destination::class);
    }

    public function packageContents()
    {
        return $this->hasMany(PackageContent::class);
    }

    public function services()
    {
        return $this->belongsToMany(Service::class, 'service_package', 'package_id', 'service_id');
    }
}
