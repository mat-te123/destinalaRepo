<?php

namespace Database\Factories;

use App\Models\Package;
use App\Models\Service;
use App\Models\ServicePackage;
use Illuminate\Database\Eloquent\Factories\Factory;

class ServicePackageFactory extends Factory
{
    protected $model = ServicePackage::class;

    public function definition()
    {
        return [
            'service_id' => Service::factory(),
            'package_id' => Package::factory(),
        ];
    }
}
