<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('appointments', function (Blueprint $table) {
            $table->string('animal_other_name', 100)->nullable()->after('animal_type');
            $table->string('animal_age', 50)->nullable()->after('animal_other_name');
        });

        Schema::table('ambulance_requests', function (Blueprint $table) {
            $table->string('animal_other_name', 100)->nullable()->after('animal_type');
            $table->string('animal_age', 50)->nullable()->after('animal_other_name');
        });

        Schema::table('boardings', function (Blueprint $table) {
            $table->string('animal_other_name', 100)->nullable()->after('animal_type');
            $table->string('animal_age', 50)->nullable()->after('animal_other_name');
        });

        Schema::table('groomings', function (Blueprint $table) {
            $table->string('animal_type', 50)->default('dog')->after('phone');
            $table->string('animal_other_name', 100)->nullable()->after('animal_type');
            $table->string('animal_age', 50)->nullable()->after('animal_other_name');
        });
    }

    public function down(): void
    {
        Schema::table('appointments', function (Blueprint $table) {
            $table->dropColumn(['animal_other_name', 'animal_age']);
        });

        Schema::table('ambulance_requests', function (Blueprint $table) {
            $table->dropColumn(['animal_other_name', 'animal_age']);
        });

        Schema::table('boardings', function (Blueprint $table) {
            $table->dropColumn(['animal_other_name', 'animal_age']);
        });

        Schema::table('groomings', function (Blueprint $table) {
            $table->dropColumn(['animal_type', 'animal_other_name', 'animal_age']);
        });
    }
};
