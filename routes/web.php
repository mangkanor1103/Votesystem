<?php

use App\Http\Controllers\ElectionController;
use App\http\Controllers\PostController;
use App\Http\Controllers\Profile;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ShareController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('data', [Profile::class,
    'fetchData'
]);

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Define Share routes
Route::resource('share', ShareController::class)
    ->only(['index', 'store', 'update'])
    ->middleware(['auth', 'verified']);

// Define routes for authenticated users
Route::middleware(['auth', 'verified'])->group(function () {

    // Route to view the list of elections for superadmins
    Route::get('/superadmin/elections', [ElectionController::class, 'index'])->name('superadmin.elections');

    // Route to create a new election (post data)
    Route::post('/superadmin/elections', [ElectionController::class, 'store'])->name('election.store');

    // Route to view the details of a specific election
    Route::get('/superadmin/elections/{id}', [ElectionController::class, 'show'])->name('superadmin.elections.show');
});


Route::get('/subadmin/electiondashboard', function () {
    return Inertia::render('SubAdmin/ElectionDashboard');
})->middleware(['auth', 'verified'])->name('subadmin.electiondashboard');



// Profile routes for authenticated users
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::resource('share', ShareController::class)
    ->only(['index', 'store', 'update'])
    ->middleware(['auth', 'verified']);

// Delete share route
Route::delete('/share/{share}', [ShareController::class, 'destroy'])->name('share.destroy')
    ->middleware(['auth', 'verified']);

require __DIR__.'/auth.php';

// Example simple routes for testing or other purposes
Route::get('/welcome', function(){
    return view('app');
});

Route::get('/Welcome', function(){
    return 'Hello World, I am Rhea!';
});

Route::get('/header', function(){
    return response('<h1></h1>');
});

Route::get('/header', function(){
    return response('<h1></h1>')
        ->header('Content-Type','text/plain')
        ->header('foo','bar');
});

Route::resource('/poste', PostController::class)
    ->only(['index', 'store'])
    ->middleware(['auth', 'verified']);

