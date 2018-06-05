<?php

namespace App\Http\Controllers;

use App\User;
use App\Teacher;
use Illuminate\Http\Request;
use App\Http\Requests\UserTeacherRequest;


class UserTeacherController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $userTeacher = User::has('teacher')->with('teacher')->get();
        return response()->json($userTeacher, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UserTeacherRequest $request)
    {
        //
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->type = 'teacher';

        if ($user->save()) {
            # code...
            \Log::info('1');
            if (empty($request->photo)) {
                # code...
                $teacher = new Teacher();
                $teacher->photo = 'user-admin.png';
                $teacher->skypeid = $request->skypeid;
                $teacher->address = $request->address;
                $teacher->city = $request->city;
                $teacher->state = $request->state;
                $teacher->zipcode = $request->zipcode;
                $teacher->country = $request->country;
                $teacher->timezone = $request->timezone;
                $teacher->details = $request->details;
                $user->teacher()->save($teacher);
                \Log::info('2');
                return response()->json(['result' => true], 201);
            }
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        //
    }
}
