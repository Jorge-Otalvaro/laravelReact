<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();

        return response()->json([
            "success" => true,
            "message" => "Users list",
            "info" => [],
            "results" => UserResource::collection($users),
        ]);
    }

    public function store(StoreUserRequest $request)
    {
        $nickname = Str::of($request->email)->explode('@');

        $user = User::create([
            'name'      => $request->name,
            'email'     => $request->email,
            'mobile'    => $request->mobile,
            'age'       => $request->age,
            'nickname'  => $nickname[0]
        ]);

        return response()->json([
            "success" => true,
            "message" => "User created successfully.",
            "results" => new UserResource($user),
        ]);
    }

    public function update(StoreUserRequest $request, User $user)
    {
        $user->name     = $request->name;
        $user->email    = $request->email;
        $user->mobile   = $request->mobile;
        $user->age      = $request->age;
        $user->nickname = $request->nickname;
        $user->save();

        return response()->json([
            "success" => true,
            "message" => "User updated successfully.",
            "results" => new UserResource($user),
        ]);
    }

    public function destroy(User $user)
    {
        $user->delete();

        return response()->json('User deleted successfully', 204);
    }
}
