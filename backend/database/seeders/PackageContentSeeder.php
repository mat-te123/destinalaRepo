<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\PackageContent;

class PackageContentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        PackageContent::factory()->count(20)->create();
    }
}
