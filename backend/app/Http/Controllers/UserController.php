<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

use App\Models\User;

class UserController extends Controller
{
    function signup(Request $req) {

        $user = new User;
        $user->name = $req->fullname;
        $user->email = $req->email;
        $user->password = Hash::make($req->password);
        
        if($user->save()){
            $user['status'] = 1;
            return $user;
        }
        else
            return array('status'=>0, 'msg'=>'Error in registering user');
    }
}
