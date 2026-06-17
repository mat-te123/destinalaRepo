<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Package;
use App\Models\PackageContent;
use App\Models\Service;
use App\Models\ServicePackage;

class PackageController extends Controller {

    function indexServices(int $id){
        $service = Service::findOrFail($id);

        return response()->json([
            'status' => 'success',
            'data' => $service->packages
        ]
        );

    }

    function indexDestinations(int $destinationId){
        $query = Package::select(
            'id',
            'destination_id',
            'main_title',
            'main_desc',
            'main_image',
            'package_video',
        )->where('destination_id', $destinationId)->get();

        return response()->json([
            'status' => 'success',
            'data' => $query
        ]);

    }

    function Show(int $id){

        $mainData = Package::select(
            'id',
            'destination_id',
            'main_title',
            'main_desc',
            'main_image',
            'package_video',
        )->find($id);

        if (!$mainData) {
            return response()->json([
                'status' => 'error',
                'message' => 'Package not found'
            ], 404);
        }

        $contentData = PackageContent::select(
            'id',
            'package_id',
            'content_title',
            'content_desc',
            'content_image',
            'display_order',
        )->where('package_id', $id)
        ->orderBy('display_order', 'asc')
        ->get();
        
        

        return response()->json([
            'status' => 'success',
            'data' => [
                'main' => $mainData,
                'contents' => $contentData
            ]
        ]);
    }


}