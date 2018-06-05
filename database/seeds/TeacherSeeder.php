<?php

use Illuminate\Database\Seeder;

class TeacherSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $teacher = new Teacher();
        $teacher->photo = "user-admin.png";
        $teacher->skypeid = "SkypeId987";
        $teacher->address = "Calle 987";
        $teacher->city = "Ciudad 987";
        $teacher->state = "Estado 987";
        $teacher->zipcode = "00987";
        $teacher->country = "Venezuela";
        $teacher->timezone = "America/Caracas";
        $teacher->details = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium delectus error quos similique quod perferendis cum est! Itaque consequuntur dolore maxime provident magni minima aliquam accusamus, culpa doloribus eius? Iure.";
        $teacher->user_id = 3;
        $teacher->save();

    }
}
