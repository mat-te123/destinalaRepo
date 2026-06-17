<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Destination extends Model
{
    use HasFactory;

    protected $fillable = [
        'main_title',
        'main_description',
        'main_image',
    ];

    public function destinationContents()
    {
        return $this->hasMany(DestinationContent::class);
    }

    public function packages()
    {
        return $this->hasMany(Package::class);
    }

    public function testimonials()
    {
        return $this->hasMany(Testimonial::class);
    }
}
