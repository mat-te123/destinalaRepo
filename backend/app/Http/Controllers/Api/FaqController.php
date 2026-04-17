<?php
namespace App\Http\Controllers\Api;
use App\Models\Faq;

class FaqController extends BaseTenantController {
    public function __construct() { $this->model = Faq::class; }
}