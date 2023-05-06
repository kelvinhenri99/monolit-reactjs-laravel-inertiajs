<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Request;

class UserResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return parent::toArray($request);

        /* 'created' => Carbon::make($this->created_at)->format('d-m-Y'); */
    }
}