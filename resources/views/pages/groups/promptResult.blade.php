<x-app-layout>
    <x-slot name="header">
        <h1 class="flex items-center gap-1 text-sm font-normal">
            <span class="text-gray-700">
                {{ __('Groupes') }}
            </span>
        </h1>
    </x-slot>

    <div class="mt-4">
        @foreach($groups as $group)
            <div class="mb-4">
                <h2 class="text-xl font-bold">{{ $group['group_id'] }}</h2>
                <ul>
                    @foreach($group['students'] as $student)
                        <li>
                            <strong>{{ $student['first_name'] }} {{ $student['last_name'] }}</strong> (Grade: {{ $student['grade'] }})
                        </li>
                    @endforeach
                </ul>
            </div>
        @endforeach
    </div>
</x-app-layout>
