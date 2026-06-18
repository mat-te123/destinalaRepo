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

     function cmsIndex()
    {
        // 1. Ambil data sesuai dengan query yang kamu rancang
        $packages = Package::query()
            ->select(
                'id',
                'destination_id',
                'main_title',
                'main_image', // Dibutuhkan untuk kolom Cover
                'created_at'
            )
            ->withCount('packageContents') // Menghasilkan atribut 'package_contents_count'
            ->latest()
            ->paginate(5);

        // 2. Transformasi data agar siap pakai di komponen Table HeroUI kamu
        $packages->getCollection()->transform(function ($package) {
            return [
                'id' => $package->id,
                'main_title' => $package->main_title, // Map ke kolom "Nama Paket"
                'package_contents_count' => $package->package_contents_count, // Map ke kolom "Jumlah konten"
                
                // Mengonversi path local database menjadi URL gambar yang valid untuk tag <img /> React
                'main_image' => $package->main_image 
                    ? (filter_var($package->main_image, FILTER_VALIDATE_URL) 
                        ? $package->main_image 
                        : asset('storage/' . $package->main_image))
                    : null,
                    
                'created_at' => $package->created_at ? $package->created_at->translatedFormat('d F Y') : null,
            ];
        });

        // 3. Return JSON Response
        return response()->json([
            'status' => 'success',
            'message' => 'Data paket CMS berhasil diambil',
            'data' => $packages
        ], 200);
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