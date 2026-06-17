<?php

namespace Database\Factories;

use App\Models\Destination;
use Illuminate\Database\Eloquent\Factories\Factory;

class DestinationFactory extends Factory
{
    protected $model = Destination::class;

    public function definition()
    {
        return [
            'main_title' => $this->faker->sentence,
            'main_description' => $this->faker->paragraph,
            'main_image' => $this->faker->imageUrl(),
        ];
    }
}
