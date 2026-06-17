<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;


use App\Models\Testimonial;

class TestimonialController extends Controller
{
    public function __construct()
    {
        $this->model = Testimonial::class;
    }
}