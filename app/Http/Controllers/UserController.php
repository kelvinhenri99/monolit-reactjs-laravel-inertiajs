<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUpdateUser;
use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function index()
    {
        $users = User::paginate();

        return UserResource::collection($users);
    }

    public function store(StoreUpdateUser $request)
    {
        $data = $request->validated();
        $data['password'] = bcrypt($request->password);

        $user = User::create($data);

        return new UserResource($user);
    }

    public function show($id)
    {
        $user = User::findOrFail($id);

        return new UserResource($user);
    }

    public function update(StoreUpdateUser $request, $id)
    {
        $user = User::findOrFail($id);

        $data = $request->all();
        $data['password'] = bcrypt($request->password);
        $user->update($data);

        return new UserResource($user);
    }
}
