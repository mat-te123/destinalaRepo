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
        Schema::create('CompanyProfiles', function (Blueprint $table) {
            $table->id('Id');
            $table->foreignId('TenantId')->unique()->constrained('Tenants', 'Id')->onDelete('cascade');
            $table->text('AboutUs')->nullable();
            $table->text('Vision')->nullable();
            $table->text('Mission')->nullable();
            $table->string('Address')->nullable();
            $table->string('Phone')->nullable();
            $table->string('Email')->nullable();
            $table->text('MapsUrl')->nullable();
            $table->json('SocialLinks')->nullable();
            $table->string('ServiceLabelAlias')->default('Layanan');
            $table->string('PackageLabelAlias')->default('Paket');
            $table->timestamp('UpdatedAt')->useCurrent();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('company_profiles');
    }
};
