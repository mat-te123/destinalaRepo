<?php
namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Models\CompanyProfile;
use Illuminate\Http\Request;

class ProfileController extends Controller {
    public function show() {
        return response()->json(CompanyProfile::first());
    }

    public function update(Request $request) {
        $profile = CompanyProfile::first();
        $profile->update($request->all());
        return response()->json(['message' => 'Profil Perusahaan Diperbarui']);
    }
}