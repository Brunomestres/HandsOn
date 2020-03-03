<?php

namespace App\Http\Controllers;

use App\Bateria;
use App\Nota;
use App\Surfista;
use App\Onda;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

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
        $req = $request->all();
        $save = $bateria->create();

        $result = $bateria->find($save->id);

        $data = $result->surfistas()->attach([$req['surfista1']]);
        $data = $result->surfistas()->attach([$req['surfista2']]);
        return response()->json($data);
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
    
    
    public function winner($id)
    {
        $i = 0;
        $bateria = new Bateria();

        $result = $bateria->find($id); 

        $ondas =  $result->ondas()->get();

        $data = [];

        $notas = [];
        
        foreach($ondas as $onda)
        {
            $notas[$i] = $this->queryNota($onda->id);

            $i++;
        }

        $i = 0;   
        foreach($notas as $nota)
        {
            $data[$i] = $this->average($nota);
            
            $i++;
        }


        if($data[0] > $data[1])
        {
            $save = $data[0];
        }else if($data[0] < $data[1]){
            $save = $data[1];
        }else{
            $save = 'Empate';
        }
        
        
        return response()->json($save);
    }


    
    
    function queryNota($id)
    {
        $data = [];
        $result = Onda::find($id);

        $data['nome'] = $result->surfista;
        $data['nota'] = $result->nota()->first();

        return $data; 

    }


    function average($nota)
    {
        if(!$nota) return false;
        $data['nota'] = ($nota['nota']->nota_parcial1 + $nota['nota']->nota_parcial2 + $nota['nota']->nota_parcial3) / 3; 
        $data['nome'] = $nota['nome'];
        return $data;
    }

    function makerWinner($data)
    {

    }
}
