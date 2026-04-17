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
        Schema::create('Tenants', function (Blueprint $table) {
            $table->id('Id');
            $table->string('Name');
            $table->string('Slug')->unique();
            $table->string('LogoUrl')->nullable();
            $table->string('PrimaryColor')->nullable();
            $table->string('SecondaryColor')->nullable();
            $table->timestamp('CreatedAt')->useCurrent();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tenants');
    }
};
