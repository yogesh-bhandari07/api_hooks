<?php

namespace App\Http\Controllers;

use App\Helpers\CustomResponse;
use App\Models\ApiRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AuthenticationController extends Controller
{
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'uuid' => 'required|string',
        ]);
        if ($validator->fails()) {
            return CustomResponse::error("Error", 400, $validator->errors());
        }
        $validatedData = $validator->validated();
        $user = User::create([
            'uuid' => $validatedData['uuid'],
        ]);
        $token = $user->createToken('auth_token')->plainTextToken;
        return CustomResponse::success($token);
    }
}
