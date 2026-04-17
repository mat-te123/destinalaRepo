<?php
namespace App\Http\Controllers\Api;
use App\Models\ServicePackage;

class PackageController extends BaseTenantController {
    public function __construct() { $this->model = ServicePackage::class; }
}