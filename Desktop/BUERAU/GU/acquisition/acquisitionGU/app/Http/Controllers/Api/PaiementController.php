<?php

namespace App\Http\Controllers\Api;

use App\Models\Paiement;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PaiementController extends Controller
{
    public function index()
    {
        return Paiement::all();
    }

    public function store(Request $request)
    {
        $paiement = Paiement::create($request->all());
        return response()->json($paiement, 201);
    }

    public function show($id)
    {
        return Paiement::find($id);
    }

    public function update(Request $request, $id)
    {
        $paiement = Paiement::findOrFail($id);
        $paiement->update($request->all());
        return response()->json($paiement, 200);
    }

    public function destroy($id)
    {
        Paiement::destroy($id);
        return response()->json(null, 204);
    }
}
