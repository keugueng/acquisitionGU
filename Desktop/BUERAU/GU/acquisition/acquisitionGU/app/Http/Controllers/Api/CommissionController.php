<?php

namespace App\Http\Controllers\Api;

use App\Models\Commission;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CommissionController extends Controller
{
    public function index()
    {
        return Commission::all();
    }

    public function store(Request $request)
    {
        $commission = Commission::create($request->all());
        return response()->json($commission, 201);
    }

    public function show($id)
    {
        return Commission::find($id);
    }

    public function update(Request $request, $id)
    {
        $commission = Commission::findOrFail($id);
        $commission->update($request->all());
        return response()->json($commission, 200);
    }

    public function destroy($id)
    {
        Commission::destroy($id);
        return response()->json(null, 204);
    }
}
