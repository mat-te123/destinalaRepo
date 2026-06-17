<?php

namespace Database\Factories;

use App\Models\Service;
use App\Models\ServiceContent;
use Illuminate\Database\Eloquent\Factories\Factory;

class ServiceContentFactory extends Factory
{
    protected $model = ServiceContent::class;

    public function definition()
    {
        return [
            'service_id' => Service::factory(),
            'content_title' => $this->faker->sentence,
            'content_desc' => $this->faker->paragraph,
            'content_image' => $this->faker->imageUrl(),
            'display_order' => $this->faker->numberBetween(1, 10),
        ];
    }
}
