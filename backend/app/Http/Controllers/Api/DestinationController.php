<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Destination;
use App\Models\DestinationContent;


class DestinationController extends Controller
{
    function index(Request $request)
    {
        $ContentPerPage = 4; // Jumlah konten yang ingin ditampilkan per halaman
        $query = Destination::select(
            'id',
            'main_title',
            'main_description',
            'main_image',
        )->paginate($ContentPerPage);

        return response()->json([
            'status' => 'success',
            'data' => $query
        ], 200);
    }

    function homeshow(){
        $limit = 3;
        $query = Destination::select(
            'id',
            'main_title',
            'main_image',
        )->limit($limit)->get();

        return response()->json([
            'status' => 'success',
            'data' => $query
        ], 200);
    }


    function show(int $id){
        $mainData = Destination::select(
            'id',
            'main_title',
            'main_description',
            'main_image',
        )->find($id);

        if (!$mainData) {
            return response()->json([
                'status' => 'error',
                'message' => 'Destination not found'
            ], 404);
        }

        $contentData = DestinationContent::select(
            'id',
            'destination_id',
            'content_title',
            'content_desc',
            'content_image',
            'display_order',
        )->where('destination_id', $id)
        ->orderBy('display_order', 'asc')
        ->get();

        return response()->json([
            'status' => 'success',
            'data' => [
                'main_data' => $mainData,
                'content_data' => $contentData
            ]
        ], 200);
    }
}
