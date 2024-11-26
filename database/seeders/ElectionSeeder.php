<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Election;

class ElectionSeeder extends Seeder
{
    public function run()
    {
        Election::create([
            'name' => 'Sample Election 1',
            'code' => 'ELEC-12345',
            'date' => '2024-12-01',
        ]);

        Election::create([
            'name' => 'Sample Election 2',
            'code' => 'ELEC-67890',
            'date' => '2024-12-15',
        ]);
    }
}
