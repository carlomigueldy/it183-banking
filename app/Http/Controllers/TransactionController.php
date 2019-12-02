<?php

namespace App\Http\Controllers;

use App\User;
use App\Account;
use App\Transaction;
use App\AccountTransaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TransactionController extends Controller
{
    /**
     * Displays a listing of all transactions.
     * 
     * @return { Object }
     */
    public function index()
    {
        $transactions = Transaction::with('account_transaction', 'account_transaction.account', 'account_transaction.user')->get();

        return response()->json([
            'transactions' => $transactions,
        ]);
    }
    
    /**
     * A Teller deposits an amount from
     * an Account Holder.
     * 
     * @return message
     */
    public function deposit(Request $request)
    {
        $this->validate($request, [
            'account_number' => 'required',
            'user_id' => 'required',
            'amount' => 'required',
        ]);

        $account = Account::where('account_number', $request->account_number)->first();
        $accountTransaction = AccountTransaction::where('user_id', $request->user_id)->where('account_id', $account->id)->first();

        if ($accountTransaction == true) {
            $transaction = Transaction::create([
                'account_transaction_id' => $accountTransaction->id,
                'amount_deposit' => $request->amount,
                'amount_withdraw' => 0,
            ]);

            if ($transaction) {
                $account->balance += $request->amount;
                $account->save();
            }

            return response()->json([
                'message' => 'Successfully deposited with an amount of ',
                'cond' => 'if',
            ]);
        } else {
            $accountTransaction = AccountTransaction::create([
                'user_id' => $request->user_id,
                'account_id' => $account->id,
            ]);

            $transaction = Transaction::create([
                'account_transaction_id' => $accountTransaction->id,
                'amount_deposit' => $request->amount,
                'amount_withdraw' => 0,
            ]);

            if ($transaction) {
                $account->balance += $request->amount;
                $account->save();
            }

            return response()->json([
                'new_balance' => $account->balance,
                'cond' => 'else',
            ]);
        }
    }

    /**
     * A Teller withdraws an amount for
     * an Account Holder.
     * 
     * @return message
     */
    public function withdraw(Request $request)
    {
        $this->validate($request, [
            'account_number' => 'required',
            'user_id' => 'required',
            'amount' => 'required',
        ]);

        $account = Account::where('account_number', $request->account_number)->first();
        $accountTransaction = AccountTransaction::where('user_id', $request->user_id)->where('account_id', $account->id)->first();

        if ($accountTransaction == true) {
            $transaction = Transaction::create([
                'account_transaction_id' => $accountTransaction->id,
                'amount_withdraw' => $request->amount,
                'amount_deposit' => 0,
            ]);

            if ($transaction) {
                $account->balance -= $request->amount;
                $account->save();
            }

            return response()->json([
                'message' => 'Amount withdrawn.',
                'cond' => 'if',
            ]);
        } else {
            $accountTransaction = AccountTransaction::create([
                'user_id' => $request->user_id,
                'account_id' => $account->id,
            ]);

            $transaction = Transaction::create([
                'account_transaction_id' => $accountTransaction->id,
                'amount_withdraw' => $request->amount,
                'amount_deposit' => 0,
            ]);

            if ($transaction) {
                $account->balance -= $request->amount;
                $account->save();
            }

            return response()->json([
                'new_balance' => $account->balance,
                'cond' => 'else',
            ]);
        }
    }
}
