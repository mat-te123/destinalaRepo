<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

/**
 * @group Authentication
 * * APIs untuk login dan logout admin perusahaan
 */
class AuthController extends Controller
{
    /**
     * Login Admin
     * * Gunakan endpoint ini untuk mendapatkan Bearer Token. 
     * Token ini wajib dikirim di header "Authorization" untuk semua API Admin.
     * * @bodyParam Email string required Email admin. Example: admin@travel.com
     * @bodyParam Password string required Password akun. Example: password123
     * @bodyParam Slug string required Slug unik perusahaan (dari URL). Example: travel-gadjah
     * * @response {
     * "Token": "1|rahasia_token_sanctum_kamu",
     * "User": {
     * "Id": 1,
     * "Name": "Admin Gadjah",
     * "Email": "admin@travel.com",
     * }
     * }
     * @response 401 {
     * "message": "Login Gagal, periksa email/password atau slug perusahaan."
     * }
     */
    public function login(Request $request)
    
    {

        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
            

        // 2. Cari User yang memiliki Email yang cocok
        $user = User::where('email', $request->email)
                    ->first();

        // 3. Validasi Password
        if (!$user || !Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['Email atau password salah.'],
            ]);
        }

        // 4. Generate Token Sanctum
        $token = $user->createToken('admin-token')->plainTextToken;

        return response()->json([
            'message' => 'Login Berhasil',
            'Token' => $token,
            'User' => [
                'email' => $user->email,
            ]
        ]);
    }

    /**
     * Handle Logout
     */
    public function logout(Request $request)
    {
        // Hapus token yang sedang digunakan
        $request->user()->currentAccessToken()->delete();

        return response()->json(['message' => 'Berhasil keluar (Logged out)']);
    }
}