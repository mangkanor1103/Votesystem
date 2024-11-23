<?php

namespace App\Http\Controllers;

use App\Models\Share;
use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\Validated;
use Illuminate\Http\Request;

use Inertia\Inertia;
use Inertia\Response;

use Illuminate\Support\Facades\Gate;
use Redirect;
use Symfony\Component\HttpFoundation\RedirectResponse;

class ShareController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('Share/index', [
            'shares' => Share::with('user:id,name')->latest()->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'message' => 'required|string|max:255',
        ]);

        $request-> user()->share()->create($validated);

        return redirect(route('share.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Share $share)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Share $share)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Share $share): RedirectResponse
    {
        Gate::authorize('update', $share);
        $validated = $request->validate([
            'message' => 'required|string|max:255',
        ]);

        $share->update($validated);
        return redirect(route('share.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $share = Share::find($id);

        if (!$share) {
            return response()->json(['message' => 'Share not found'], 404);
        }


        $share->delete();

        return response()->json(['message' => 'Share deleted successfully']);
    }
}
