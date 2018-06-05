<?php

use Illuminate\Database\Seeder;
use App\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $user = new User();
        $user->name = 'Admin';
        $user->email = 'admin@awesomecv.com';
        $user->password = bcrypt('123456');
        $user->type = 'admin';
        $user->save();

    }
}
