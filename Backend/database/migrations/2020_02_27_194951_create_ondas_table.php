<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOndasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ondas', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('id_baterias')->unsigned();
            $table->foreign('id_baterias')->references('id')->on('baterias')->onDelete('cascade');           
            $table->bigInteger('id_surfistas')->unsigned();
            $table->foreign('id_surfistas')->references('id')->on('surfistas')->onDelete('cascade');
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
        Schema::dropIfExists('ondas');
    }
}
