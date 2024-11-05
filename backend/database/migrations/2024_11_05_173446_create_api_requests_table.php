<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('api_requests', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100)->nullable();
            $table->string('secret', 100)->nullable();
            $table->json('header')->nullable();
            $table->json('body')->nullable();
            $table->string('expiry', 10)->default('0');
            $table->enum('method', ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD'])->default('GET');
            $table->unsignedBigInteger('http_status_id')->nullable();
            $table->foreign('http_status_id')
                ->references('id')
                ->on('http_status')
                ->onDelete('set null');
            $table->unsignedBigInteger('http_response_type_id')->nullable();
            $table->foreign('http_response_type_id')
                ->references('id')
                ->on('http_response_types')
                ->onDelete('set null');

            $table->unsignedBigInteger('charset_id')->nullable();
            $table->foreign('charset_id')
                ->references('id')
                ->on('charsets')
                ->onDelete('set null');

            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('api_requests');
    }
};
