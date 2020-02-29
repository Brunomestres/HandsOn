<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSurfistasBateriasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('surfistas_baterias', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('id_surfista')->unsigned();
            $table->bigInteger('id_bateria')->unsigned();
            $table->foreign('id_surfista')->references('id')->on('surfistas')->onDelete('Cascade');
            $table->foreign('id_bateria')->references('id')->on('baterias')->onDelete('Cascade');
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
        Schema::dropIfExists('surfistas_baterias');
    }
}
