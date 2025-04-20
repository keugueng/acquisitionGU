<?php

namespace App\Http\Controllers\Api;

use App\Models\Logement;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class LogementController extends Controller
{
    public function index()
    {
        return Logement::all();
    }

    public function store(Request $request)
    {
        $logement = Logement::create($request->all());
        return response()->json($logement, 201);
    }

    public function show($id)
    {
        return Logement::find($id);
    }

    public function update(Request $request, $id)
    {
        $logement = Logement::findOrFail($id);
        $logement->update($request->all());
        return response()->json($logement, 200);
    }

    public function destroy($id)
    {
        Logement::destroy($id);
        return response()->json(null, 204);
    }
}
