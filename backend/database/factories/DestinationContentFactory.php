<?php

namespace Database\Factories;

use App\Models\Destination;
use App\Models\DestinationContent;
use Illuminate\Database\Eloquent\Factories\Factory;

class DestinationContentFactory extends Factory
{
    protected $model = DestinationContent::class;

    public function definition()
    {
        return [
            'destination_id' => Destination::factory(),
            'content_title' => $this->faker->sentence,
            'content_desc' => $this->faker->paragraph,
            'content_image' => $this->faker->imageUrl(),
            'display_order' => $this->faker->numberBetween(1, 10),
        ];
    }
}
