<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);

        factory(App\Teacher::class, 10)->create();
        $this->call(UserSeeder::class);
        $this->call(TypeClassSeeder::class);
        $this->call(ScheduleSeeder::class);
    }
}
