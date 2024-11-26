<?php
// DashboardController.php

namespace App\Http\Controllers;
use App\Models\Election;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        // Fetch the elections data for the authenticated user (assuming you have a user_id in your elections table)
        $elections = Election::where('user_id', auth()->id())->get();

        // Pass the elections data to the Dashboard view
        return Inertia::render('Dashboard', [
            'elections' => $elections,
        ]);
    }
}
