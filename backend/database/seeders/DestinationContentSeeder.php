<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\DestinationContent;

class DestinationContentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DestinationContent::factory()->count(20)->create();
    }
}
