<?php

namespace App\Http\Controllers\Api;

use App\Models\ContratReservation;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ContratReservationController extends Controller
{
    public function index()
    {
        return ContratReservation::all();
    }

    public function store(Request $request)
    {
        $contrat = ContratReservation::create($request->all());
        return response()->json($contrat, 201);
    }

    public function show($id)
    {
        return ContratReservation::find($id);
    }

    public function update(Request $request, $id)
    {
        $contrat = ContratReservation::findOrFail($id);
        $contrat->update($request->all());
        return response()->json($contrat, 200);
    }

    public function destroy($id)
    {
        ContratReservation::destroy($id);
        return response()->json(null, 204);
    }
}
