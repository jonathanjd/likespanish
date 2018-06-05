<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Teacher extends Model
{
    //
    protected $fillable = ['photo', 'skypeid', 'address', 'city', 'state', 'zipcode', 'country', 'timezone', 'details', 'user_id'];

    public function user()
    {
        # code...
        return $this->belongsTo(User::class);
    }

}
