<?php



namespace App\Http\Controllers\Api;

use App\Models\Enfant;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class EnfantController extends Controller
{
    public function index()
    {
        return Enfant::all();
    }

    public function store(Request $request)
    {
        $enfant = Enfant::create($request->all());
        return response()->json($enfant, 201);
    }

    public function show($id)
    {
        return Enfant::find($id);
    }

    public function update(Request $request, $id)
    {
        $enfant = Enfant::findOrFail($id);
        $enfant->update($request->all());
        return response()->json($enfant, 200);
    }

    public function destroy($id)
    {
        Enfant::destroy($id);
        return response()->json(null, 204);
    }
}
