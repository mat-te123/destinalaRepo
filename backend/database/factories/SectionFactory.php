<?php

namespace Database\Factories;

use App\Models\Page;
use App\Models\Section;
use Illuminate\Database\Eloquent\Factories\Factory;

class SectionFactory extends Factory
{
    protected $model = Section::class;

    public function definition()
    {
        return [
            'page_id' => Page::factory(),
            'type' => $this->faker->word,
            'order' => $this->faker->numberBetween(1, 10),
        ];
    }
}
