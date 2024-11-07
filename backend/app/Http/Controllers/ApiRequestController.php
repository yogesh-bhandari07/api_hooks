<?php

namespace App\Http\Controllers;

use App\Helpers\CustomResponse;
use App\Models\ApiRequest;
use App\Models\HttpStatus;
use App\Models\Charsets;
use App\Models\HttpResponseType;
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


    public function getHttpStatus()
    {
        try {

            $data = HttpStatus::all();
            return CustomResponse::success($data);
        } catch (\Exception $e) {
            return CustomResponse::error($e->getMessage());
        }
    }
    public function getResponseContent()
    {
        try {

            $data = HttpResponseType::all();
            return CustomResponse::success($data);
        } catch (\Exception $e) {
            return CustomResponse::error($e->getMessage());
        }
    }
    public function getCharsetContent()
    {
        try {

            $data = Charsets::all();
            return CustomResponse::success($data);
        } catch (\Exception $e) {
            return CustomResponse::error($e->getMessage());
        }
    }
}
