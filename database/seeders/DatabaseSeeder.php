<?php

namespace Database\Seeders;

use App\Models\Cohort;
use App\Models\Group;
use App\Models\Retros;
use App\Models\RetrosColumns;
use App\Models\RetrosColumnsCards;
use App\Models\School;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\UserCohort;
use App\Models\UserGroup;
use App\Models\UserSchool;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create the default user
        $admin = User::create([
            'last_name'     => 'Admin',
            'first_name'    => 'Admin',
            'email'         => 'admin@codingfactory.com',
            'password'      => Hash::make('123456'),
        ]);

        $teacher = User::create([
            'last_name'     => 'Teacher',
            'first_name'    => 'Teacher',
            'email'         => 'teacher@codingfactory.com',
            'password'      => Hash::make('123456'),
        ]);

        $user = User::create([
            'last_name'     => 'Doe',
            'first_name'    => 'John',
            'grade'         => 13,
            'email'         => 'john.doe@codingfactory.com',
            'password'      => Hash::make('123456'),
        ]);

        $user2 = User::create([
            'last_name'     => 'Smith',
            'first_name'    => 'Jane',
            'grade'         => 8,
            'email'         => 'jane.smith@codingfactory.com',
            'password'      => Hash::make('123456'),
        ]);

        $user3 = User::create([
            'last_name'     => 'Brown',
            'first_name'    => 'Alice',
            'grade'         => 5,
            'email'         => 'alice.brown@codingfactory.com',
            'password'      => Hash::make('123456'),
        ]);

        $user4 = User::create([
            'last_name'     => 'Johnson',
            'first_name'    => 'Bob',
            'grade'         => 11,
            'email'         => 'bob.johnson@codingfactory.com',
            'password'      => Hash::make('123456'),
        ]);

        $user5 = User::create([
            'last_name'     => 'Williams',
            'first_name'    => 'Charlie',
            'grade'         => 14,
            'email'         => 'charlie.williams@codingfactory.com',
            'password'      => Hash::make('123456'),
        ]);

        $user6 = User::create([
            'last_name'     => 'Miller',
            'first_name'    => 'David',
            'grade'         => 6,
            'email'         => 'david.miller@codingfactory.com',
            'password'      => Hash::make('123456'),
        ]);

        $user7 = User::create([
            'last_name'     => 'Wilson',
            'first_name'    => 'Emily',
            'grade'         => 16,
            'email'         => 'emily.wilson@codingfactory.com',
            'password'      => Hash::make('123456'),
        ]);

        $user8 = User::create([
            'last_name'     => 'Moore',
            'first_name'    => 'Frank',
            'grade'         => 9,
            'email'         => 'frank.moore@codingfactory.com',
            'password'      => Hash::make('123456'),
        ]);

        $user9 = User::create([
            'last_name'     => 'Taylor',
            'first_name'    => 'Grace',
            'grade'         => 2,
            'email'         => 'grace.taylor@codingfactory.com',
            'password'      => Hash::make('123456'),
        ]);

        $user10 = User::create([
            'last_name'     => 'Anderson',
            'first_name'    => 'Henry',
            'grade'         => 19,
            'email'         => 'henry.anderson@codingfactory.com',
            'password'      => Hash::make('123456'),
        ]);


        // Create the default school
        $school = School::create([
            'user_id'   => $user->id,
            'name'      => 'Coding Factory',
        ]);

        // Create the admin role
        UserSchool::create([
            'user_id'   => $admin->id,
            'school_id' => $school->id,
            'role'      => 'admin'
        ]);

        // Create the teacher role
        UserSchool::create([
            'user_id'   => $teacher->id,
            'school_id' => $school->id,
            'role'      => 'teacher'
        ]);

        // Create the student role
        UserSchool::create([
            'user_id'   => $user->id,
            'school_id' => $school->id,
            'role'      => 'student',
        ]);

        // Create the student role
        UserSchool::create([
            'user_id'   => $user2->id,
            'school_id' => $school->id,
            'role'      => 'student',
        ]);

        // Create the student role
        UserSchool::create([
            'user_id'   => $user3->id,
            'school_id' => $school->id,
            'role'      => 'student',
        ]);

        // Create the student role
        UserSchool::create([
            'user_id'   => $user4->id,
            'school_id' => $school->id,
            'role'      => 'student',
        ]);

        // Create the student role
        UserSchool::create([
            'user_id'   => $user5->id,
            'school_id' => $school->id,
            'role'      => 'student',
        ]);

        // Create the student role
        UserSchool::create([
            'user_id'   => $user6->id,
            'school_id' => $school->id,
            'role'      => 'student',
        ]);

        // Create the student role
        UserSchool::create([
            'user_id'   => $user7->id,
            'school_id' => $school->id,
            'role'      => 'student',
        ]);

        // Create the student role
        UserSchool::create([
            'user_id'   => $user8->id,
            'school_id' => $school->id,
            'role'      => 'student',
        ]);

        // Create the student role
        UserSchool::create([
            'user_id'   => $user9->id,
            'school_id' => $school->id,
            'role'      => 'student',
        ]);

        // Create the student role
        UserSchool::create([
            'user_id'   => $user10->id,
            'school_id' => $school->id,
            'role'      => 'student',
        ]);

        $cohort = Cohort::create([
            'school_id' => $school->id,
            'name'      => 'Promotion B1',
            'description' => 'Cergy',
            'start_date' => \Carbon\Carbon::create(2024),
            'end_date' => \Carbon\Carbon::create(2025),
        ]);

        $cohort2 = Cohort::create([
            'school_id' => $school->id,
            'name'      => 'Promotion B2',
            'description' => 'Cergy',
            'start_date' => \Carbon\Carbon::create(2024),
            'end_date' => \Carbon\Carbon::create(2025),
        ]);

        UserCohort::create([
            'user_id'   => $admin->id,
            'cohort_id' => $school->id,
        ]);

        UserCohort::create([
            'user_id'   => $teacher->id,
            'cohort_id' => $school->id,
        ]);

        UserCohort::create([
            'user_id'   => $user2->id,
            'cohort_id' => $school->id,
        ]);

        UserCohort::create([
            'user_id'   => $user3->id,
            'cohort_id' => $school->id,
        ]);

        UserCohort::create([
            'user_id'   => $user4->id,
            'cohort_id' => $school->id,
        ]);

        UserCohort::create([
            'user_id'   => $user5->id,
            'cohort_id' => $school->id,
        ]);

        UserCohort::create([
            'user_id'   => $user6->id,
            'cohort_id' => $school->id,
        ]);

        UserCohort::create([
            'user_id'   => $user7->id,
            'cohort_id' => $school->id,
        ]);

        UserCohort::create([
            'user_id'   => $user8->id,
            'cohort_id' => $school->id,
        ]);

        UserCohort::create([
            'user_id'   => $user9->id,
            'cohort_id' => $school->id,
        ]);

        UserCohort::create([
            'user_id'   => $user10->id,
            'cohort_id' => $school->id,
        ]);


        $group1 = Group::create([
            'user_id'   => $user->id,
            'cohort_id' => $cohort->id,
            'group_name' => 'Groupe 1',
            'project_name' => "Memory",
            'description' => "lalala",
            'start_date' => \Carbon\Carbon::create(2024),
            'end_date' => \Carbon\Carbon::create(2025),
        ]);

        $group2 = Group::create([
            'user_id'   => $user->id,
            'cohort_id' => $cohort->id,
            'group_name' => 'Groupe 2',
            'project_name' => "Memory",
            'description' => "lalala",
            'start_date' => \Carbon\Carbon::create(2024),
            'end_date' => \Carbon\Carbon::create(2025),
        ]);

        UserGroup::create([
            'user_id'   => $user2->id,
            'group_id' => $group1->id,
            'role' => 'Scrum Master',
        ]);

        UserGroup::create([
            'user_id'   => $user3->id,
            'group_id' => $group1->id,
            'role' => 'Développeur',
        ]);

        UserGroup::create([
            'user_id'   => $user7->id,
            'group_id' => $group1->id,
            'role' => 'Développeur',
        ]);

        UserGroup::create([
            'user_id'   => $user4->id,
            'group_id' => $group2->id,
            'role' => 'Développeur',
        ]);

        UserGroup::create([
            'user_id'   => $user6->id,
            'group_id' => $group2->id,
            'role' => 'Développeur',
        ]);

        UserGroup::create([
            'user_id'   => $user5->id,
            'group_id' => $group2->id,
            'role' => 'Scrum Master',
        ]);

        $retro = Retros::create([
            'name' => 'Projet web',
            'cohort_id' => $cohort->id,
            'user_id' => $admin->id,
            'description' => "Ouais viens dans la retro",
            'start_date' => \Carbon\Carbon::create(2025, 04, 18, 14, 00),
            'end_date' => \Carbon\Carbon::create(2025, 04, 19, 00, 00),
        ]);

        $retroColumn = RetrosColumns::create([
            'retro_id' => $retro->id,
            'name' => 'A ameliorer'
        ]);

        RetrosColumnsCards::create([
            'retro_id' => $retro->id,
            'column_id' => $retroColumn->id,
            'name' => "blabla",
            'user_id' => $user2->id
        ]);
    }
}
