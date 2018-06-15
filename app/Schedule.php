<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    //
    protected $fillable = ['hour', 'date', 'state', 'teacher_id', 'type_class_id'];

    public function typeClass()
    {
        return $this->belongsTo(TypeClass::class);
    }

}
