<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;


use App\Models\Testimonial;

class TestimonialController extends Controller
{
    public function __construct()
    {
        $this->model = Testimonial::class;
    }

    public function cmsIndex(Request $request)
    {
        // 1. Inisialisasi Query Dasar dengan Eager Loading model Customer
        $query = Testimonial::with('customer:id,name');

        // 2. Fitur Pencarian ("Cari Data")
        if ($request->has('search') && $request->search != '') {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('main_title', 'like', '%' . $search . '%')
                  ->orWhere('desc', 'like', '%' . $search . '%')
                  ->orWhereHas('customer', function ($customerQuery) use ($search) {
                      $customerQuery->where('name', 'like', '%' . $search . '%');
                  });
            });
        }

        // 3. Fitur Filter Berdasarkan Tab Rating (1, 2, 3, 4, 5)
        if ($request->has('rating') && in_array($request->rating, [1, 2, 3, 4, 5])) {
            $query->where('value', $request->rating);
        }

        // 4. Hitung Statistik Ringkasan sebelum data di-paginate
        // Nilai rata-rata dibulatkan 1 angka di belakang koma (misal: 4.5)
        $totalTestimonials = $query->count();
        $averageRating = round($query->avg('value') ?? 0, 1);

        // 5. Eksekusi Pagination (ambil 10 data per halaman)
        $testimonials = $query->latest()->paginate(10);

        // 6. Transformasi Data agar sesuai dengan kebutuhan Kolom Tabel HeroUI
        $testimonials->getCollection()->transform(function ($testimonial) {
            return [
                'id' => $testimonial->id,
                'customer' => [
                    'name' => $testimonial->customer->name ?? 'Anonymous',
                    // Membuat inisial nama untuk avatar fallback jika frontend butuh (misal: "John Doe" -> "JD")
                    'initials' => $testimonial->customer ? urlencode(substr($testimonial->customer->name, 0, 2)) : 'AN'
                ],
                'title' => $testimonial->main_title,
                'description' => $testimonial->desc,
                'rating' => [
                    'score' => $testimonial->value,
                    'label' => $this->getRatingLabel($testimonial->value) // Mengubah angka rating menjadi teks (e.g., "Sangat Bagus")
                ],
                'created_at' => $testimonial->created_at ? $testimonial->created_at->format('d m y') : '00 00 00',
            ];
        });

        // 7. Kembalikan Response JSON Gabungan (Statistik + Paginated Data)
        return response()->json([
            'status' => 'success',
            'message' => 'Data testimonial berhasil diambil',
            'summary' => [
                'total' => $totalTestimonials,
                'average' => $averageRating
            ],
            'testimonials' => $testimonials
        ], 200);
    }

    /**
     * Helper untuk menentukan teks label rating sesuai dengan UI mockup.
     */
    private function getRatingLabel($value)
    {
        return match ((int)$value) {
            5 => 'Sangat Bagus',
            4 => 'Bagus',
            3 => 'Cukup',
            2 => 'Buruk',
            1 => 'Sangat Buruk',
            default => 'Tidak Ada Rating',
        };
    }
}