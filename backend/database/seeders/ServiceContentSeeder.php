<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\ServiceContent;

class ServiceContentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ServiceContent::factory()->count(20)->create();
    }
}
