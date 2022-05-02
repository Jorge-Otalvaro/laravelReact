<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUserRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name'   => ['required', 'string', 'max:255'],
            'email'  => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'mobile' => ['required', 'numeric', 'min:10', 'unique:users'],
            'age'    => ['required', 'numeric'],
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'El campo nombre es requerido',
            'name.string' => 'El campo nombre tiene caracteres no permitidos',
            'name.max' => 'El campo nombre supera el maximo permitido :max',

            'mobile.required' => 'El campo Telefono es requerido',
            'mobile.numeric' => 'El Telefono debe ser numerico',
            'mobile.min' => 'El Telefono no cumple con el minino :min',
            'email.unique' => 'El Telefono ya existe',

            'email.required' => 'El campo Correo electronico es requerido',
            'email.string' => 'El Correo electronico tiene caracteres no permitidos',
            'email.email' => 'El Correo electronico no tiene un formato valido',
            'email.max' => 'El Correo electronico supera el maximo permitido :max',
            'email.unique' => 'El Correo electronico ya existe',

            'age.required' => 'El campo Edad es requerido',
            'age.numeric' => 'La edad debe ser numerico',
        ];
    }

}
