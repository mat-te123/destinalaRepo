<?php

namespace Database\Factories;

use App\Models\Service;
use Illuminate\Database\Eloquent\Factories\Factory;

class ServiceFactory extends Factory
{
    protected $model = Service::class;

    public function definition()
    {
        return [
            'main_title' => $this->faker->sentence,
            'main_desc' => $this->faker->paragraph,
            'main_image' => $this->faker->imageUrl(),
        ];
    }
}
