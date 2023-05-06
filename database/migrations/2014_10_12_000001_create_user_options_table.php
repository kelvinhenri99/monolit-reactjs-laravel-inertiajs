<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('user_options', function (Blueprint $table) {
            $table->uuid('id');
            $table->foreignUuid('user_id');
            $table->string('image')->nullable();
            $table->string('background')->nullable();
            $table->date('date_birth')->nullable();
            $table->text('biography')->nullable();
            $table->string('gender')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('user_options');
    }
};