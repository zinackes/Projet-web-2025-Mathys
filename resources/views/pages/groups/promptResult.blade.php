<x-app-layout>
    <x-slot name="header">
        <h1 class="flex items-center gap-1 text-sm font-normal">
            <span class="text-gray-700">
                {{ __('Génération de groupes pour le projet') . " " . $project_name }}
            </span>
        </h1>
    </x-slot>

    <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        @foreach($groups as $group)
            <div id="group-{{ $group['group_id'] }}" class="card hover:!border-gray-200 duration-300">
                <div class="card-header border-b-0 flex justify-between items-center">
                    <h3 class="card-title text-xl">Groupe {{ $group['group_id'] + 1 }}</h3>
                    <button class="text-gray-600 hover:text-gray-800 focus:outline-none" data-modal-target="modal-{{ $group['group_id'] }}">
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                    </button>
                </div>

                @php
                    $total = 0;
                    usort($group['students'], function($a, $b) {
                        return $b['grade'] <=> $a['grade'];
                    });

                    foreach($group['students'] as $student) {
                        $total += $student['grade'];
                    }
                    $average = count($group['students']) > 0 ? round($total / count($group['students']), 2) : 0;
                @endphp

                <div class="card-body">
                    <div class="flex items-center justify-center gap-2">
                        @if ($average >= 15)
                            <span class="text-green-500 text-lg">
                                <i class="fa-solid fa-thumbs-up"></i>
                            </span>
                            <p class="text-gray-600">Moyenne : <span class="font-semibold text-green-600">{{ $average }}</span></p>
                        @elseif ($average >= 10)
                            <span class="text-yellow-500 text-lg">
                                <i class="fa-solid fa-meh"></i>
                            </span>
                            <p class="text-gray-600">Moyenne : <span class="font-semibold text-yellow-600">{{ $average }}</span></p>
                        @else
                            <span class="text-red-500 text-lg">
                                <i class="fa-solid fa-thumbs-down"></i>
                            </span>
                            <p class="text-gray-600">Moyenne : <span class="font-semibold text-red-600">{{ $average }}</span></p>
                        @endif
                    </div>
                </div>

                <!-- Section des étudiants avec drag-and-drop -->
                <div id="students-group-{{ $group['group_id'] }}" class="grid lg:grid-cols-2 gap-5 lg:gap-7.5" data-sortable="true">
                    @foreach($group['students'] as $student)
                        <div class="student-card flex flex-col justify-center items-center py-2 mx-3 lg:mx-5 duration-300 rounded-lg {{
                            $student['grade'] >= 15 ? 'bg-green-200/70 border !border-green-200/90 hover:bg-green-300/80' :
                            ($student['grade'] >= 10 ? 'bg-yellow-200/70 border !border-yellow-200/90 hover:bg-yellow-300/80' :
                            'bg-red-200/70 border !border-red-200/90 hover:bg-red-300/80') }}"
                             data-id="{{ $student['id'] }}" draggable="true">
                            <strong class="text-base text-center">{{ $student['first_name'] }} {{ $student['last_name'] }}</strong>
                            <span class="text-xs text-gray-600">(Moyenne bilan: {{ $student['grade'] }})</span>
                        </div>
                    @endforeach
                </div>
            </div>
        @endforeach
    </div>

    <!-- Modal pour les 3 petits points -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Sortable/1.14.0/Sortable.min.js"></script>
    <script>
        // Initialisation du drag and drop pour chaque groupe
        document.querySelectorAll('[id^="students-group-"]').forEach(group => {
            new Sortable(group, {
                group: "students", // Permet de déplacer entre plusieurs groupes
                animation: 150,
                ghostClass: 'sortable-ghost',
                dragClass: 'sortable-drag',
                onStart(evt) {
                    console.log('Début du déplacement:', evt.item);
                },
                onEnd(evt) {
                    console.log("Élément déplacé : ", evt.item);
                    const movedStudentId = evt.item.dataset.id;
                    const oldGroupId = evt.from.id.replace('students-group-', '');
                    const newGroupId = evt.to.id.replace('students-group-', '');

                    // Si l'élément n'a pas changé de groupe, on ne fait rien
                    if (oldGroupId !== newGroupId) {
                        console.log(`L'étudiant avec l'ID ${movedStudentId} a été déplacé de ${oldGroupId} vers ${newGroupId}`);
                    }

                    // Affichage des IDs des étudiants dans la nouvelle carte
                    const updatedStudentOrder = Array.from(evt.to.children).map((child) => child.dataset.id);
                    console.log("Ordre des étudiants dans la nouvelle carte: ", updatedStudentOrder);
                }
            });
        });
    </script>

</x-app-layout>
