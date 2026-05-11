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
    Schema::create('PageConfigs', function (Blueprint $table) {
        $table->id('Id');
        $table->foreignId('TenantId')->constrained('Tenants', 'Id')->onDelete('cascade');
        $table->string('PageKey'); 
        $table->longText('ContentJson'); 
        $table->timestamps();

        $table->unique(['TenantId', 'PageKey']);
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('PageConfigs');
    }
};
