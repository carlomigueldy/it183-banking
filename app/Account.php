<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    protected $fillable = [
        'user_id',
        'balance',
        'account_number',
    ];

    public $timestamps = false;

    /**
     * The Account Holder's user credentials.
     */
    public function user()
    {
        return $this->belongsTo('App\User');
    }

    /**
     * An Account Holder may have many transactions
     * with different Tellers.
     */
    public function account_transactions()
    {
        return $this->hasMany('App\AccountTransaction');
    }
}
