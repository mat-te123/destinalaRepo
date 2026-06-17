<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\SectionContent;

class SectionContentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        SectionContent::factory()->count(30)->create();
    }
}
