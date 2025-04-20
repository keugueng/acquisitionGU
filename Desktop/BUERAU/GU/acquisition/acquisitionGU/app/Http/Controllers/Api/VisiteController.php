<?php

namespace App\Http\Controllers\Api;

use App\Models\Visite;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class VisiteController extends Controller
{
    public function index()
    {
        return Visite::all();
    }

    public function store(Request $request)
    {
        $Visite = Visite::create($request->all());
        return response()->json($Visite, 201);
    }

    public function show($id)
    {
        return Visite::find($id);
    }

    public function update(Request $request, $id)
    {
        $Visite = Visite::findOrFail($id);
        $Visite->update($request->all());
        return response()->json($Visite, 200);
    }

    public function destroy($id)
    {
        Visite::destroy($id);
        return response()->json(null, 204);
    }
}
