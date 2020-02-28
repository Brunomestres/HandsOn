<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSurfistasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('surfistas', function (Blueprint $table) {
            $table->bigIncrements('numero');
            $table->string('nome');
            $table->string('pais');
            $table->bigInteger('id_baterias')->unsigned();
            $table->foreign('id_baterias')->references('id')->on('baterias')->onDelete('Cascade');
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
        Schema::dropIfExists('surfistas');
    }
}
