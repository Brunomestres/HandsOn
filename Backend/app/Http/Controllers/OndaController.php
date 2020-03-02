<?php

namespace App\Http\Controllers;

use App\Onda;
use Illuminate\Http\Request;

class OndaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Onda $onda)
    {
        $data = $onda->all();
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
    public function store(Request $request, Onda $onda)
    {
        $data = $request->all();

        $save = $onda->create([
            'id_surfistas' => $data['surfista'],
            'id_baterias' => $data['bateria']
        ]);

        return response()->json($save);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Onda  $onda
     * @return \Illuminate\Http\Response
     */
    public function show(Onda $onda)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Onda  $onda
     * @return \Illuminate\Http\Response
     */
    public function edit(Onda $onda)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Onda  $onda
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Onda $onda)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Onda  $onda
     * @return \Illuminate\Http\Response
     */
    public function destroy(Onda $onda)
    {
        //
    }
}
