<?php

use App\User;
use App\Account;
use Illuminate\Database\Seeder;

class AccountSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();
        foreach (range(1, 30) as $i) {
            $user = User::create([
                'role_id' => 1,
                'name' => $faker->name,
                'email' => $faker->unique()->safeEmail,
                'email_verified_at' => now(),
                'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            ]);
            
            Account::create([
                'user_id' => $user->id,
                'balance' => $faker->numberBetween($min = 500, $max = 1000),
            ]);
        }
    }
}
