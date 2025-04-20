<?php

namespace App\Http\Controllers\Api;

use App\Models\Guichet;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class GuichetController extends Controller
{
    public function index()
    {
        return Guichet::all();
    }

    public function store(Request $request)
    {
        $guichet = Guichet::create($request->all());
        return response()->json($guichet, 201);
    }

    public function show($id)
    {
        return Guichet::find($id);
    }

    public function update(Request $request, $id)
    {
        $guichet = Guichet::findOrFail($id);
        $guichet->update($request->all());
        return response()->json($guichet, 200);
    }

    public function destroy($id)
    {
        Guichet::destroy($id);
        return response()->json(null, 204);
    }
}
