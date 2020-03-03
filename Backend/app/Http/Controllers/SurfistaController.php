<?php

namespace App\Http\Controllers;

use App\Surfista;
use Illuminate\Http\Request;




class SurfistaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $result = Surfista::all();

        return response()->json($result);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Surfista $surfista)
    {
        $dados = $request->all();

        $save = $surfista->create([
            'nome' => $dados['nome'],
            'pais' => $dados['pais']
        ]);
        
        


        return response()->json($save);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Surfista  $surfista
     * @return \Illuminate\Http\Response
     */
    public function show(Surfista $surfista)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Surfista  $surfista
     * @return \Illuminate\Http\Response
     */
    public function edit(Surfista $surfista)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Surfista  $surfista
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Surfista $surfista)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Surfista  $surfista
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Surfista::destroy($id);
    }
}
