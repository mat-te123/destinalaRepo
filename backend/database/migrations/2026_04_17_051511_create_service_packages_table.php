<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
public function up()
{
    Schema::create('ServicePackages', function (Blueprint $table) {
        $table->id('Id');
        $table->foreignId('TenantId')->constrained('Tenants', 'Id')->onDelete('cascade');
        $table->string('PackageName');
        $table->decimal('Price', 15, 2)->nullable();
        $table->json('Features')->nullable(); 
        $table->boolean('IsActive')->default(true);
        $table->string('PdfPath')->nullable(); // Kolom PDF
        $table->timestamp('CreatedAt')->useCurrent();
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('service_packages');
    }
};
