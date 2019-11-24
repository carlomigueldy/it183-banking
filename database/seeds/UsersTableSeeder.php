<?php

use App\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /**
         * The Manager.
         */
        User::create([
            'name' => 'Carlo Miguel Dy',
            'role_id' => 3,
            'email' => 'admin@admin.com',
            'password' => bcrypt('password'),
        ]);
    }
}
