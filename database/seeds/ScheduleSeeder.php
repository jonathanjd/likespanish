<?php

use Illuminate\Database\Seeder;

use App\Schedule;
use Carbon\Carbon;

class ScheduleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $now = new Carbon();
        $year = $now->subDay()->format('Y-m-d');
        $now->hour = 7;
        $now->minute = 00;
        $now->second = 00;
        $hour = $now;

        $schedule = new Schedule();
        $schedule->hour = $hour->addHour()->format('H:i:s');
        $schedule->date = $year;
        $schedule->state = 'open';
        $schedule->teacher_id = 1;
        $schedule->type_class_id = 1;
        $schedule->save();

        $schedule = new Schedule();
        $schedule->hour = $hour->addHour()->format('H:i:s');
        $schedule->date = $year;
        $schedule->state = 'open';
        $schedule->teacher_id = 2;
        $schedule->type_class_id = 1;
        $schedule->save();

        $schedule = new Schedule();
        $schedule->hour = $hour->addHour()->format('H:i:s');
        $schedule->date = $year;
        $schedule->state = 'open';
        $schedule->teacher_id = 3;
        $schedule->type_class_id = 1;
        $schedule->save();

    }
}
