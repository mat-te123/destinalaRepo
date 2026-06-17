<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\PageConfig;
use Illuminate\Http\Request;

class PageConfigController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'PageKey' => 'required|string',
            'ContentJson' => 'required|string',
        ]);

        // Mengambil TenantId otomatis dari Admin yang login
        $tenantId = $request->user()->TenantId;

        $config = PageConfig::updateOrCreate(
            ['TenantId' => $tenantId, 'PageKey' => $request->PageKey],
            ['ContentJson' => $request->ContentJson]
        );

        return response()->json(['message' => 'Desain berhasil disimpan!']);
    }

    public function show(Request $request, $pageKey)
    {
        // Jika tidak login (publik), cari berdasarkan TenantId di query string
        $tenantId = $request->user() ? $request->user()->TenantId : $request->query('TenantId');

        $config = PageConfig::where('TenantId', $tenantId)
                            ->where('PageKey', $pageKey)
                            ->first();

        return response()->json([
            'ContentJson' => $config ? $config->ContentJson : null
        ]);
    }
}