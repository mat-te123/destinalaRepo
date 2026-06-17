<?php

namespace Database\Factories;

use App\Models\Testimonial;
use App\Models\Customer;
use App\Models\Destination;
use Illuminate\Database\Eloquent\Factories\Factory;

class TestimonialFactory extends Factory
{
    protected $model = Testimonial::class;

    public function definition()
    {
        return [
            'customer_id' => Customer::factory(),
            'destination_id' => Destination::factory(),
            'main_title' => $this->faker->sentence,
            'desc' => $this->faker->paragraph,
            'value' => $this->faker->numberBetween(1, 5),
        ];
    }
}
