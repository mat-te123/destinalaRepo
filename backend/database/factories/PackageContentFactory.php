<?php

namespace Database\Factories;

use App\Models\Package;
use App\Models\PackageContent;
use Illuminate\Database\Eloquent\Factories\Factory;

class PackageContentFactory extends Factory
{
    protected $model = PackageContent::class;

    public function definition()
    {
        return [
            'package_id' => Package::factory(),
            'content_title' => $this->faker->sentence,
            'content_desc' => $this->faker->paragraph,
            'content_image' => $this->faker->imageUrl(),
            'display_order' => $this->faker->numberBetween(1, 10),
        ];
    }
}
