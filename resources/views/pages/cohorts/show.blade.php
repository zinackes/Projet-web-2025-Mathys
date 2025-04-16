<x-app-layout>
    <x-slot name="header">
        <h1 class="flex items-center gap-1 text-sm font-normal">
            <span class="text-gray-700">{{ $cohort->name }}</span>
        </h1>
    </x-slot>

    @if(session('success'))
        <div class="mb-4 px-4 py-3 bg-green-100 border border-green-300 text-green-800 rounded-lg">
            {{ session('success') }}
        </div>
    @endif

    <!-- begin: grid -->
    <div class="grid lg:grid-cols-3 gap-5 lg:gap-7.5 items-stretch">
        <div class="lg:col-span-2">
            <div class="grid">
                <div class="card card-grid h-full min-w-full">
                    <div class="card-header">
                        <h3 class="card-title">Etudiants</h3>
                    </div>
                    <div class="card-body">
                        <div data-datatable="true" data-datatable-page-size="30">
                            <div class="scrollable-x-auto">
                                <table class="table table-border" data-datatable-table="true">
                                    <thead>
                                    <tr>
                                        <th class="min-w-[135px]">
                                            <span class="sort asc">
                                                 <span class="sort-label">Nom</span>
                                                 <span class="sort-icon"></span>
                                            </span>
                                        </th>
                                        <th class="min-w-[135px]">
                                            <span class="sort">
                                                <span class="sort-label">Prénom</span>
                                                <span class="sort-icon"></span>
                                            </span>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach($usersInCohort as $userInCohort)
                                        <tr>
                                            <td>{{$userInCohort->last_name}}</td>
                                            <td>{{$userInCohort->first_name}}</td>
                                        </tr>
                                    @endforeach
                                    </tbody>
                                </table>
                            </div>
                            <div class="card-footer justify-center md:justify-between flex-col md:flex-row gap-5 text-gray-600 text-2sm font-medium">
                                <div class="flex items-center gap-2 order-2 md:order-1">
                                    Show
                                    <select class="select select-sm w-16" data-datatable-size="true" name="perpage"></select>
                                    per page
                                </div>
                                <div class="flex items-center gap-4 order-1 md:order-2">
                                    <span data-datatable-info="true"></span>
                                    <div class="pagination" data-datatable-pagination="true"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="lg:col-span-1">
            <div class="card h-full">
                <div class="card-header">
                    <h3 class="card-title">
                        Ajouter un étudiant à la promotion
                    </h3>
                </div>
                <div class="card-body flex flex-col gap-5">
                    <x-forms.dropdown name="user_id" :label="__('Etudiant')">
                        <option value="1">Etudiant 1</option>
                    </x-forms.dropdown>

                    <x-forms.primary-button>
                        {{ __('Valider') }}
                    </x-forms.primary-button>
                </div>
            </div>
        </div>
        <div class="lg:col-span-3">
            <div class="card h-full">
                <div class="card-header justify-center">
                    <h3 class="card-title">
                        Génerer des groupes
                    </h3>
                </div>
                <div class="card-body flex flex-col gap-5">
                    <form class="flex flex-col gap-3" method="POST" action={{route("group.generate")}}>
                        @csrf

                        <div class="flex gap-3 items-center justify-center">
                            <x-forms.input
                                name="numberGroup"
                                :value="old('numberGroup')"
                                :label="__('Nombre de groupes')"
                                :messages="$errors->get('numberGroup')"
                                :type="'number'" />


                            <x-forms.input name="numberUsersInGroups" :value="old('numberUsersInGroups')" :label="__('Nombre étudiants/groupe')"
                                           :messages="$errors->get('numberUsersInGroups')"
                                :type="'number'"/>


                            <x-forms.input name="description" :value="old('description')" :label="__('Description')"
                                           :placeholder="'Description du projet..'"
                                           :messages="$errors->get('description')"
                                           :type="'textarea'"/>

                            <x-forms.input name="project_name" :value="old('project_name')" :label="__('Nom du projet')"
                                           :messages="$errors->get('project_name')"/>
                        </div>


                        <input type="hidden" name="cohort_id" value="{{ $cohort->id }}">

                        <x-forms.primary-button>
                            {{ __('Génerer') }}
                        </x-forms.primary-button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- end: grid -->
</x-app-layout>
