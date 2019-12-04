<?php

namespace App\Http\Controllers;

use App\Transaction;
use Illuminate\Http\Request;

class LogController extends Controller
{
    public function index()
    {
        $transactions = Transaction::with('account_transaction', 'account_transaction.account', 'account_transaction.user', 'account_transaction.account.user')->get();

        return response()->json($transactions);
    }
}
