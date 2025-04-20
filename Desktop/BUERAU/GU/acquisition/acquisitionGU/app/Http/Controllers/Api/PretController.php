<?php

namespace App\Http\Controllers\Api;

use App\Models\Pret;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PretController extends Controller
{
    public function index()
    {
        return Pret::all();
    }

    public function store(Request $request)
    {
        $pret = Pret::create($request->all());
        return response()->json($pret, 201);
    }

    public function show($id)
    {
        return Pret::find($id);
    }

    public function update(Request $request, $id)
    {
        $pret = Pret::findOrFail($id);
        $pret->update($request->all());
        return response()->json($pret, 200);
    }

    public function destroy($id)
    {
        Pret::destroy($id);
        return response()->json(null, 204);
    }
}
