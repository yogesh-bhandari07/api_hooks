<?php

namespace App\Http\Controllers;

use App\Helpers\CustomResponse;
use App\Models\ApiRequest;
use App\Models\HttpStatus;
use App\Models\Charsets;
use App\Models\HttpResponseType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ApiRequestController extends Controller
{
    public function index()
    {
        try {
            $apiRequests = ApiRequest::with(['httpStatus', 'httpResponseType', 'charset', 'user'])->where('user_id', auth()->user()->id)->where('deleted_at', null)->orderBy('created_at', 'desc')->get();
            return CustomResponse::success($apiRequests);
        } catch (\Exception $e) {
            return CustomResponse::error($e->getMessage());
        }
    }

    public function store(Request $request)
    {

        try {
            $validator = Validator::make($request->all(), [
                "name" => "required",
                "secret" => "required",
                "header" => "nullable:json",
                "body" => "nullable:json",
                "expiry" => "required",
                "method" => "required|in:GET,POST,PUT,PATCH,DELETE,OPTIONS,HEAD",
                "http_status_id" => "required|exists:http_status,id",
                "http_response_type_id" => "required|exists:http_response_types,id",
                "charset_id" => "required|exists:charsets,id",
            ]);
            if ($validator->fails()) {
                return CustomResponse::error("Error", 400, $validator->errors());
            }
            $validatedData = $validator->validated();
            $request = ApiRequest::create($validatedData);
            return CustomResponse::success($request);
        } catch (\Exception $e) {
            return CustomResponse::error($e->getMessage());
        }
    }

    /*************  ✨ Codeium Command ⭐  *************/
    /**
     * Display the specified ApiRequest.
     *
     * @param ApiRequest $api_request
     * @return ApiRequest
     */
    /******  8e31fb9c-c813-414d-af29-1509b06efc7f  *******/
    public function show(ApiRequest $api_request)
    {
        return $api_request;
    }

    public function update(Request $request, ApiRequest $api_request)
    {
        try {
            $validator = Validator::make($request->all(), [
                "name" => "required",
                "secret" => "required",
                "header" => "nullable:json",
                "body" => "nullable:json",
                "expiry" => "required",
                "method" => "required|in:GET,POST,PUT,PATCH,DELETE,OPTIONS,HEAD",
                "http_status_id" => "required|exists:http_status,id",
                "http_response_type_id" => "required|exists:http_response_types,id",
                "charset_id" => "required|exists:charsets,id",
            ]);
            if ($validator->fails()) {
                return CustomResponse::error("Error", 400, $validator->errors());
            }
            $validatedData = $validator->validated();
            $api_request->update($validatedData);
            return CustomResponse::success($api_request);
        } catch (\Exception $e) {
            return CustomResponse::error($e->getMessage());
        }
    }

    public function destroy(ApiRequest $api_request)
    {
        try {
            $api_request->delete();
            return CustomResponse::success($api_request);
        } catch (\Exception $e) {
            return CustomResponse::error($e->getMessage());
        }
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
