<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Data Mentah untuk variasi
        $cities = ['Yogyakarta', 'Bali', 'Jakarta', 'Lombok', 'Malang', 'Bandung', 'Semarang', 'Surabaya', 'Medan', 'Makassar'];
        $icons = ['car-outline', 'airplane-outline', 'bus-outline', 'boat-outline', 'map-outline'];

        for ($i = 1; $i <= 10; $i++) {
            // 1. Data Tenants
            $tenantId = DB::table('Tenants')->insertGetId([
                'Name'           => "Perusahaan Travel $i",
                'Slug'           => "travel-perusahaan-$i",
                'PrimaryColor'   => "#" . substr(md5(rand()), 0, 6),
                'SecondaryColor' => "#" . substr(md5(rand()), 0, 6),
                'CreatedAt'      => now(),
            ]);

            // 2. Data Users (1 Admin per Tenant)
            DB::table('Users')->insert([
                'TenantId'  => $tenantId,
                'Name'      => "Admin $i",
                'Email'     => "admin$i@travel.com",
                'Password'  => Hash::make('password123'),
                'CreatedAt' => now(),
            ]);

            // 3. Data PageConfigs (Craft.js)
            DB::table('PageConfigs')->insert([
                'TenantId'    => $tenantId,
                'PageKey'     => 'homepage',
                'ContentJson' => json_encode([
                    'root' => [
                        'type' => 'div',
                        'props' => ['className' => 'container'],
                        'children' => [['type' => 'text', 'props' => ['text' => "Selamat Datang di Travel $i", 'fontSize' => 40]]]
                    ]
                ]),
                'created_at'  => now(),
                'updated_at'  => now(),
            ]);

            // 4. Data Services
            DB::table('Services')->insert([
                'TenantId'    => $tenantId,
                'Title'       => "Layanan Unggulan $i",
                'Description' => "Deskripsi layanan terbaik untuk perjalanan ke " . $cities[$i-1],
                'Icon'        => $icons[rand(0, 4)],
                'IsFeatured'  => $i % 2 == 0,
                'CreatedAt'   => now(),
            ]);

            // 5. Data ServicePackages
            DB::table('ServicePackages')->insert([
                'TenantId'    => $tenantId,
                'PackageName' => "Paket Wisata " . $cities[$i-1],
                'Price'       => rand(500000, 5000000),
                'Features'    => json_encode(['Transport', 'Hotel', 'Makan']),
                'IsActive'    => true,
                'CreatedAt'   => now(),
            ]);

            // 6. Data Testimonials
            DB::table('Testimonials')->insert([
                'TenantId'     => $tenantId,
                'CustomerName' => "Pelanggan $i",
                'Destination'  => $cities[rand(0, 9)],
                'Content'      => "Sangat puas dengan layanan dari Perusahaan $i!",
                'Rating'       => rand(4, 5),
                'CreatedAt'    => now(),
            ]);

            // 7. Data CompanyProfiles
            DB::table('CompanyProfiles')->insert([
                'TenantId'  => $tenantId,
                'AboutUs'   => "Kami adalah travel agent ke-$i yang berlokasi di " . $cities[$i-1],
                'Vision'    => "Menjadi nomor 1 di " . $cities[$i-1],
                'Mission'   => "Melayani dengan hati.",
                'Phone'     => "0812987654$i",
                'Email'     => "info@travel$i.com",
                'UpdatedAt' => now(),
            ]);
        }
    }
}