<?php
namespace App\Http\Controllers\Api;
use App\Models\Service;

/**
 * @group Manajemen Layanan
 */
class ServiceController extends BaseTenantController {
    public function __construct() 
    { 
        $this->model = Service::class; 
    }
}