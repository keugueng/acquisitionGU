<?php

namespace App\Http\Controllers\Api;

use App\Models\Document;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DocumentController extends Controller
{
    public function index()
    {
        return Document::all();
    }

    public function store(Request $request)
    {
        $document = Document::create($request->all());
        return response()->json($document, 201);
    }

    public function show($id)
    {
        return Document::find($id);
    }

    public function update(Request $request, $id)
    {
        $document = Document::findOrFail($id);
        $document->update($request->all());
        return response()->json($document, 200);
    }

    public function destroy($id)
    {
        Document::destroy($id);
        return response()->json(null, 204);
    }
}
