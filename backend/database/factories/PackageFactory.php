<?php

namespace Database\Factories;

use App\Models\Destination;
use App\Models\Package;
use Illuminate\Database\Eloquent\Factories\Factory;

class PackageFactory extends Factory
{
    protected $model = Package::class;

    public function definition()
    {
        return [
            'destination_id' => Destination::factory(),
            'main_title' => $this->faker->sentence,
            'main_desc' => $this->faker->paragraph,
            'main_image' => $this->faker->imageUrl(),
            'package_video' => 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        ];
    }
}
