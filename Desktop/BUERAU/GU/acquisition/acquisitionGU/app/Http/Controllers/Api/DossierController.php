<?php

namespace App\Http\Controllers\Api;

use App\Models\Dossier;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DossierController extends Controller
{
    public function index()
    {
        return Dossier::all();
    }

    public function store(Request $request)
    {
        $dossier = Dossier::create($request->all());
        return response()->json($dossier, 201);
    }

    public function show($id)
    {
        return Dossier::find($id);
    }

    public function update(Request $request, $id)
    {
        $dossier = Dossier::findOrFail($id);
        $dossier->update($request->all());
        return response()->json($dossier, 200);
    }

    public function destroy($id)
    {
        Dossier::destroy($id);
        return response()->json(null, 204);
    }
}
