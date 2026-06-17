<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            CompanySeeder::class,
            DestinationContentSeeder::class,
            DestinationSeeder::class,
            PackageContentSeeder::class,
            PackageSeeder::class,
            PageSeeder::class,
            UserSeeder::class,
            SectionSeeder::class,
            SectionContentSeeder::class,
            ServiceSeeder::class,
            ServiceContentSeeder::class,
            ServicePackageSeeder::class,
            TestimonialSeeder::class,
            CustomerSeeder::class,
        ]);


    }
}