<?php

namespace App\Http\Controllers;

use App\Bateria;
use App\Surfista;
use Illuminate\Http\Request;

class BateriaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Bateria $bateria)
    {
        $data = $bateria->all();

        return response()->json($data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Bateria $bateria)
    {
        $bateria->save();

        $result = $bateria->find(4);
        $save = $result->surfistas()->attach([1]);
        return response()->json($save);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Bateria  $bateria
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // $result = Bateria::has('surfistas')->get();
        $result = Bateria::find($id);
        $data = $result->surfistas()->get();

        return response()->json($data);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Bateria  $bateria
     * @return \Illuminate\Http\Response
     */
    public function edit(Bateria $bateria)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Bateria  $bateria
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Bateria $bateria)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Bateria  $bateria
     * @return \Illuminate\Http\Response
     */
    public function destroy(Bateria $bateria)
    {
        //
    }
}
