<?php

use App\TypeClass;
use Illuminate\Database\Seeder;

class TypeClassSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $typeClass = new TypeClass();
        $typeClass->name = 'private';
        $typeClass->save();

        $typeClass = new TypeClass();
        $typeClass->name = 'group';
        $typeClass->save();


    }
}
