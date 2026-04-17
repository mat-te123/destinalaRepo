<?php
namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

/**
 * @authenticated
 */

class BaseTenantController extends Controller {
    protected $model;

    /**
     * List Data
     * * Mengambil semua data yang hanya dimiliki oleh perusahaan yang sedang login.
     */    
    public function index() {
        return response()->json($this->model::all());
    }

    /**
     * Simpan Data Baru
     * * @bodyParam PdfFile file Opsional file PDF.
     * @bodyParam ImageFile file Opsional file gambar (JPG/PNG).
     * @bodyParam * string Data lainnya sesuai kolom tabel (CamelCase).
     */

    public function store(Request $request)
    {
        // 1. Ambil semua input teks (Title, Description, dll)
        $inputData = $request->all();

        // 2. Cek apakah ada file PDF yang diunggah
        // Kita asumsikan nama field dari Frontend adalah 'PdfFile'
        if ($request->hasFile('PdfFile')) {
            
            // Validasi sederhana khusus untuk file
            $request->validate([
                'PdfFile' => 'mimes:pdf|max:2048' // Max 2MB
            ]);

            $tenantId = auth()->user()->TenantId;
            $file = $request->file('PdfFile');

            // Simpan file ke storage/app/public/pdfs/{TenantId}
            // Nama file akan di-generate otomatis agar unik
            $path = $file->store("pdfs/{$tenantId}", 'public');

            // 3. Masukkan path file tersebut ke dalam array data 
            // dengan key 'PdfPath' (Sesuai CamelCase di database)
            $inputData['PdfPath'] = $path;
        }

        // 4. Barulah simpan semua data ke database
        $data = $this->model::create($inputData);

        return response()->json([
            'message' => 'Data Berhasil Dibuat', 
            'data' => $data
        ], 201);
    }

    /**
     * Detail Data
     * * @urlParam id integer required ID data. Example: 1
     */

    public function show($id) {
        return response()->json($this->model::findOrFail($id));
    }

    /**
     * Update Data
     * * @urlParam id integer required ID data.
     * @bodyParam _method string required Gunakan "PUT" jika mengirim via Form-Data. Example: PUT
     */

    public function update(Request $request, $id) {
        $item = $this->model::findOrFail($id);
        $item->update($request->all());
        return response()->json(['message' => 'Data Berhasil Diperbarui']);
    }

    /**
     * Hapus Data
     * * @urlParam id integer required ID data yang akan dihapus.
     */
    
    public function destroy($id) {
        $this->model::findOrFail($id)->delete();
        return response()->json(['message' => 'Data Berhasil Dihapus']);
    }
    
}