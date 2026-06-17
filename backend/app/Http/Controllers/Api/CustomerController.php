<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\Models\Customer;

class CustomerController extends Controller
{
    function countData()
    {
        $query = Customer::count();

        return response()->json([
            'status' => 'success',
            'data' => $query
        ], 200);
    }
}
