<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TellerController extends Controller
{
    /**
     * A listing of all Tellers.
     * 
     * @return Array 
     */
    public function index()
    {
        $tellers = Teller::all();

        return response()->json([
            'tellers' => $tellers,
        ]);
    }

    /**
     * Creates a new Teller.
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|unique:users',
            'email' => 'required|email',
            'password' => 'required|confirmed'
        ]);
        
        $teller = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'role_id' => 2, 
            'password' => bcrypt($request->password),
        ]);

        return response()->json([
            'teller' => [
                'name' => $teller->name,
                'email' => $teller->email,
            ],
            'message' => 'A new Teller was created.',
        ]);
    }
}
