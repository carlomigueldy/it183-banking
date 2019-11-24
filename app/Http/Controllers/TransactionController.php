<?php

namespace App\Http\Controllers;

use App\User;
use App\Account;
use App\Transaction;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    /**
     * A Teller deposits an amount from
     * an Account Holder.
     * 
     * @return message
     */
    public function deposit(Request $request)
    {
        $this->validate($request, [
            'amount_deposit' => 'required',
            'user_id' => 'required',
            'account_id' => 'required',
        ]);

        $accountTransaction = AccountTransaction::where('user_id', $request->user_id)
        ->where('account_id', $request->account_id)
        ->first();

        if ($accountTransaction) {

        }
    }

    /**
     * A Teller withdraws an amount for
     * an Account Holder.
     * 
     * @return message
     */
    public function withdraw()
    {
        $this->validate($request, [
            'amount_withdraw' => 'required',
        ]);
    }
}
