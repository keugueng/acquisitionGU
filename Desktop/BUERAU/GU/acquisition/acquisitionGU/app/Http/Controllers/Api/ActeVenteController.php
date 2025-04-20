<?php

namespace App\Http\Controllers\Api;

use App\Models\ActeVente;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ActeVenteController extends Controller
{
    public function index()
    {
        return ActeVente::all();
    }

    public function store(Request $request)
    {
        $acteVente = ActeVente::create($request->all());
        return response()->json($acteVente, 201);
    }

    public function show($id)
    {
        return ActeVente::find($id);
    }

    public function update(Request $request, $id)
    {
        $acteVente = ActeVente::findOrFail($id);
        $acteVente->update($request->all());
        return response()->json($acteVente, 200);
    }

    public function destroy($id)
    {
        ActeVente::destroy($id);
        return response()->json(null, 204);
    }
}
