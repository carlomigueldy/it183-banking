<?php

namespace App\Http\Controllers;

use App\User;
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
        $tellers = User::where('role_id', 2)->get();

        return response()->json([
            'tellers' => $tellers,
        ]);
    }

    /**
     * Displays Teller information on how many
     * transactions he has made and on which Accounts.
     */
    public function show($id)
    {
        // Code
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

    /**
     * Updates a Teller info.
     */
    public function update(Request $request, $id)
    {
        // Code
    }

    /**
     * Deletes a Teller.
     */
    public function destroy($id)
    {
        $teller = User::findOrFail($id);

        if ($teller->role_id == 2) {
            $teller->delete();

            return response()->json([
                'teller' => [
                    'name' => $teller->name,
                    'email' => $teller->email,
                ],
                'message' => 'A Teller has been deleted.',
            ]);
        }
    }
}
