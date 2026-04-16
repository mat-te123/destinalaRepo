<?php

namespace App\Http\Controllers\Api;

use App\Models\Testimonial;

class TestimonialController extends BaseTenantController
{
    public function __construct()
    {
        $this->model = Testimonial::class;
    }
}