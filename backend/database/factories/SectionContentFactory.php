<?php

namespace Database\Factories;

use App\Models\Section;
use App\Models\SectionContent;
use Illuminate\Database\Eloquent\Factories\Factory;

class SectionContentFactory extends Factory
{
    protected $model = SectionContent::class;

    public function definition()
    {
        return [
            'section_id' => Section::factory(),
            'key' => $this->faker->word,
            'content' => $this->faker->paragraph,
        ];
    }
}
