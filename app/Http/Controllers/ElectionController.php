<?php

namespace App\Http\Controllers;

use App\Models\Election;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ElectionController extends Controller
{
    /**
     * Show the list of elections.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        // Fetch all elections from the database
        $elections = Election::all();

        // Return the view with the elections data
        return Inertia::render('SuperAdmin/Elections', [
            'elections' => $elections,
        ]);
    }

    /**
     * Store a newly created election in the database.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        // Validate the incoming request data
        $validated = $request->validate([
            'election_name' => 'required|string|max:255',
            'election_date' => 'required|date',
        ]);

        // Generate a random election code
        $election_code = $this->generateElectionCode();

        // Check if the election code already exists to ensure uniqueness
        while (Election::where('election_code', $election_code)->exists()) {
            $election_code = $this->generateElectionCode();
        }

        // Create a new election record in the database
        Election::create([
            'election_name' => $validated['election_name'],
            'election_date' => $validated['election_date'],
            'election_code' => $election_code,
        ]);

        // Redirect back to the elections list with a success message
        return redirect()->route('superadmin.elections')
            ->with('success', 'Election created successfully!');
    }

    /**
     * Show the details of a specific election.
     *
     * @param int $id
     * @return \Inertia\Response
     */
    public function show($id)
    {
        // Find the election or fail with a 404 error
        $election = Election::findOrFail($id);

        // Return the details view with the election data
        return Inertia::render('SuperAdmin/ElectionShow', [
            'election' => $election,
        ]);
    }

    /**
     * Generate a random election code.
     *
     * @return string
     */
    private function generateElectionCode()
    {
        // Generate a code with 4 random uppercase letters followed by 4 digits
        return strtoupper(Str::random(4)) . '-' . rand(1000, 9999);
    }
}
