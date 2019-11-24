<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    protected $fillabe = [
        'account_transaction_id',
        'amount_withdraw',
        'amount_deposit',
    ];

    public function account_transaction()
    {
        return $this->belongsTo('App\AccountTransaction');
    }
}
