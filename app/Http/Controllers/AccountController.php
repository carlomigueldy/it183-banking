<?php

namespace App\Http\Controllers;

use App\User;
use App\Account;
use App\AccountTransaction;
use Illuminate\Http\Request;

class AccountController extends Controller
{
    /**
     * Creates a new Account Holder.
     * 
     * @return response
     */
    public function newAccount(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|unique:users',
            'email' => 'required|email',
            'password' => 'required|confirmed',
        ]);
        
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'role_id' => 1,
            'password' => bcrypt($request->password),
        ]);

        $account = Account::create([
            'user_id' => $user->id,
        ]);

        return response()->json([
            'account' => [
                'account_id' => $account->id,
                'name' => $user->name, 
                'email' => $user->email,
            ],
            'message' => 'A new Account Holder has been created.',
        ]);
    }

    /**
     * Checks the current balance of an
     * Account Holder.
     * 
     * @return msg
     */
    public function checkBalance()
    {

    }
}
