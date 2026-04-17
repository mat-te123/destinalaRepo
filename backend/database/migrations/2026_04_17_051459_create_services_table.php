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
        Schema::create('Services', function (Blueprint $table) {
            $table->id('Id');
            $table->foreignId('TenantId')->constrained('Tenants', 'Id')->onDelete('cascade');
            $table->string('Title');
            $table->text('Description')->nullable();
            $table->string('Icon')->nullable();
            $table->boolean('IsFeatured')->default(false);
            $table->string('PdfPath')->nullable(); // Kolom PDF
            $table->timestamp('CreatedAt')->useCurrent();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('services');
    }
};
