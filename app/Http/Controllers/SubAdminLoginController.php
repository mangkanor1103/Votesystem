<?php
// app/Http/Controllers/SubAdminLoginController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SubAdmin; // Assuming you have a SubAdmin model
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class SubAdminLoginController extends Controller
{
    public function login(Request $request)
    {
        // Validate the election code
        $request->validate([
            'election_code' => 'required|exists:sub_admins,election_code', // Assuming 'election_code' is a column in 'sub_admins' table
        ]);

        // Find the sub-admin by election code
        $subAdmin = SubAdmin::where('election_code', $request->election_code)->first();

        if ($subAdmin) {
            // Simulate login
            Auth::login($subAdmin); // Assuming your sub-admin is a guard or model you use for authentication
            return response()->json(['message' => 'Login successful', 'subAdmin' => $subAdmin], 200);
        }

        return response()->json(['error' => 'Invalid election code'], 400);
    }
}
