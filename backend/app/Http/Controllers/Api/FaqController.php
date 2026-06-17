<?php
namespace App\Http\Controllers\Api;
use App\Models\Faq;


class FaqController extends Controller {
    public function __construct() { $this->model = Faq::class; }
}