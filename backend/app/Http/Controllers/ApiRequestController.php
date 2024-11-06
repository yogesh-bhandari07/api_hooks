<?php

namespace App\Http\Controllers;

use App\Helpers\CustomResponse;
use App\Models\ApiRequest;
use Illuminate\Http\Request;

class ApiRequestController extends Controller
{
    public function index()
    {
        $apiRequests = ApiRequest::all();
        return CustomResponse::success($apiRequests);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string',
            'content' => 'required|string',
        ]);

        $article = ApiRequest::create($validated);

        return response()->json($article, 201);
    }

    public function show(ApiRequest $article)
    {
        return $article;
    }

    public function update(Request $request, ApiRequest $article)
    {
        $validated = $request->validate([
            'title' => 'sometimes|required|string',
            'content' => 'sometimes|required|string',
        ]);

        $article->update($validated);

        return response()->json($article, 200);
    }

    public function destroy(ApiRequest $article)
    {
        $article->delete();

        return response()->json(null, 204);
    }
}
