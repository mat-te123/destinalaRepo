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
        Schema::create('Testimonials', function (Blueprint $table) {
            $table->id('Id');
            $table->foreignId('TenantId')->constrained('Tenants', 'Id')->onDelete('cascade');
            $table->string('CustomerName');
            $table->string('Role')->nullable();
            $table->text('Content');
            $table->integer('Rating')->default(5);
            $table->string('AvatarUrl')->nullable();
            $table->timestamp('CreatedAt')->useCurrent();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('testimonials');
    }
};
