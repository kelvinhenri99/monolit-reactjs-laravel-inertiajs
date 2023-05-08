<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('preferences', function (Blueprint $table) {
            $table->uuid('id');
            $table->boolean('private')->default(1);
            $table->boolean('chat')->default(1);
            $table->boolean('address')->default(1);
            $table->boolean('phone')->default(1);
            $table->boolean('date_birth')->default(1);
            $table->boolean('gender')->default(1);
            $table->boolean('email')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('preferences');
    }
};