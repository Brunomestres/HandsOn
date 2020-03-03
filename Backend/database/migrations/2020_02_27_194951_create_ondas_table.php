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
            $table->string('surfista');
            $table->foreign('id_baterias')->references('id')->on('baterias')->onDelete('cascade');
            $table->integer('status')->default(0);
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
