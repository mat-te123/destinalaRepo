<?php

namespace App\Http\Controllers\Api;

use App\Models\CompanyProfile;
use Illuminate\Http\Request;

/**
 * @group Profil & Kustomisasi
 * @authenticated
 * * API untuk mengatur tampilan landing page perusahaan.
 */
class ProfileController extends BaseTenantController
{
    public function __construct() {
        $this->model = CompanyProfile::class;
    }

    /**
     * Ambil Profil Perusahaan
     * * Digunakan Frontend untuk mengambil Logo, Warna, dan Alias Menu.
     * @response {
     * "AboutUs": "Deskripsi perusahaan...",
     * "ServiceLabelAlias": "Produk Kami",
     * "PackageLabelAlias": "Pilihan Paket Wisata",
     * "Address": "Yogyakarta, Indonesia"
     * }
     */
    public function show($id = null) {
        return response()->json(CompanyProfile::first());
    }

    /**
     * Update Profil
     * * @bodyParam ServiceLabelAlias string Ubah nama menu "Service". Example: Layanan Kami
     * @bodyParam PackageLabelAlias string Ubah nama menu "Package". Example: Paket Spesial
     */
    public function update(Request $request, $id = null) {
        $profile = CompanyProfile::first();
        $profile->update($request->all());
        return response()->json(['message' => 'Profile Updated']);
    }
}