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
        Schema::create('Faqs', function (Blueprint $table) {
            $table->id('Id');
            $table->foreignId('TenantId')->constrained('Tenants', 'Id')->onDelete('cascade');
            $table->text('Question');
            $table->text('Answer');
            $table->string('Category')->nullable();
            $table->timestamp('CreatedAt')->useCurrent();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('faqs');
    }
};
