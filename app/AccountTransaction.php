<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AccountTransaction extends Model
{
    protected $fillable = [
        'account_id',
        'user_id',
    ];

    public $timestamps = false;

    /**
     * The Account Holder.
     */
    public function account()
    {
        return $this->belongsTo('App\Account');
    }

    /**
     * The Teller that handles the Account Holder's
     * entire transactions.
     */
    public function user()
    {
        return $this->belongsTo('App\User');
    }
    
    /**
     * Will have many transactions from different Tellers.
     */
    public function transactions()
    {
        return $this->hasMany('App\Transaction');
    }
}
