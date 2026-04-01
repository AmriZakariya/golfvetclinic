<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('groomings', function (Blueprint $table) {
            $table->id();
            $table->string('owner_name');
            $table->string('phone', 30);
            $table->string('breed', 100);
            $table->decimal('weight_kg', 5, 2)->nullable();
            $table->string('service_type', 100);
            $table->date('preferred_date')->nullable();
            $table->enum('status', ['pending', 'confirmed', 'cancelled', 'done'])->default('pending');
            $table->text('notes')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('groomings');
    }
};
