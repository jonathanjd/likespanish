<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserTeacherRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            //User
            'name' => 'required|string|unique:users',
            'email' => 'required|email|unique:users',
            'password' => 'required|string|min:6|max:10',
            //Teacher
            'photo' => 'max:255',
            'skypeid' => 'required|max:255',
            'address' => 'required|max:255',
            'city' => 'required|max:255',
            'state' => 'required|max:255',
            'zipcode' => 'required|max:255',
            'country' => 'required|max:255',
            'timezone' => 'required|max:255',
            'details' => 'required|max:500',

        ];
    }
}
