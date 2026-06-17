<?php
namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Service;
use App\Models\ServiceContent;

/**
 * @group Manajemen Layanan
 */
class ServiceController extends Controller {
    function index(){


        $query = Service::select(
            'id',
            'main_title',
            'main_desc',
            'main_image',
        )->paginate(4);

        return response()->json([
            'status' => 'success',
            'data' => $query
        ]);
    }

    function homeshow(){
        $limit = 3;
        $query = Service::select(
            'id',
            'main_title',
            'main_image',
            'main_desc',
        )->limit($limit)->get();

        return response()->json([
            'status' => 'success',
            'data' => $query
        ]);
    }

    function show(int $id){
        $service = Service::select(
            'id',
            'main_title',
            'main_desc',
            'main_image',
        )->find($id);

        if (!$service) {
            return response()->json([
                'status' => 'error',
                'message' => 'Layanan tidak ditemukan'
            ], 404);
        }

        $contents = ServiceContent::select(
            'id',
            'service_id',
            'content_title',
            'content_desc',
            'content_image',
            'display_order'
        )->where('service_id', $id)->get();

        return response()->json([
            'status' => 'success',
            'data' => [
                'service' => $service,
                'content' => $contents
            ]
        ]);
    }

}