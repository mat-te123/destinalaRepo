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

    function CMSIndex() {
        // 1. Ambil data dengan query yang efisien
        $destinations = Destination::query()
            ->select('id', 'main_title', 'created_at') // Ambil kolom yang diperlukan saja
            ->withCount('destinationContents')         // Otomatis menghasilkan attribute 'destination_contents_count'
            ->with(['packages' => function ($query) {
                $query->select('id', 'destination_id', 'main_title'); // Hanya ambil ID dan Judul Paket
            }])
            ->latest()
            ->paginate(8); // Menggunakan pagination (sesuai rekomendasi data tabel master)

        // 2. Transformasi data agar strukturnya rapi saat diterima React
        $destinations->getCollection()->transform(function ($destination) {
            return [
                'id' => $destination->id,
                'main_title' => $destination->main_title,
                'contents_count' => $destination->destination_contents_count,
                'connected_packages' => $destination->packages->map(function ($package) {
                    return [
                        'id' => $package->id,
                        'title' => $package->main_title,
                    ];
                }),
                // Format tanggal menjadi teks yang mudah dibaca (Contoh: 18 Juni 2026)
                'created_at' => $destination->created_at->translatedFormat('d F Y'),
            ];
        });

        // 3. Kembalikan dalam bentuk JSON Response
        return response()->json([
            'status' => 'success',
            'message' => 'Data destinasi berhasil diambil',
            'data' => $destinations
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
