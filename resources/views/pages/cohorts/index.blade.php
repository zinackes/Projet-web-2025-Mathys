<x-app-layout>
    <x-slot name="header">
        <h1 class="flex items-center gap-1 text-sm font-normal">
            <span class="text-gray-700">
                {{ __('Promotions') }}
            </span>
        </h1>
    </x-slot>

    <!-- begin: grid -->
    <div class="grid lg:grid-cols-3 gap-5 lg:gap-7.5 items-stretch">
        <div class="lg:col-span-2">
            <div class="grid">
                <div class="card card-grid h-full min-w-full">
                    <div class="card-header">
                        <h3 class="card-title">Mes promotions</h3>
                    </div>
                    <div class="card-body">
                        <div data-datatable="true" data-datatable-page-size="5">
                            <div class="scrollable-x-auto">
                                <table class="table table-border" data-datatable-table="true">
                                    <thead>
                                    <tr>
                                        <th class="min-w-[280px]">
                                            <span class="sort asc">
                                                 <span class="sort-label">Promotion</span>
                                                 <span class="sort-icon"></span>
                                            </span>
                                        </th>
                                        <th class="min-w-[135px]">
                                            <span class="sort">
                                                <span class="sort-label">Année</span>
                                                <span class="sort-icon"></span>
                                            </span>
                                        </th>
                                        <th class="min-w-[135px]">
                                            <span class="sort">
                                                <span class="sort-label">Etudiants</span>
                                                <span class="sort-icon"></span>
                                            </span>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach($cohorts as $cohort)
                                        <tr>
                                            <td>
                                                <div class="flex flex-col gap-2">
                                                    <a class="leading-none font-medium text-sm text-gray-900 hover:text-primary"
                                                       href="{{ route('cohort.show', $cohort->id) }}" id="cohort-name-{{ $cohort->id }}">
                                                        {{$cohort->name}}
                                                    </a>
                                                    <span class="text-2sm text-gray-700 font-normal leading-3">
            {{$cohort->description}}
        </span>
                                                </div>
                                            </td>

                                            <td>{{ \Carbon\Carbon::parse($cohort->start_date)->format('Y') }} - {{ \Carbon\Carbon::parse($cohort->end_date)->format('Y') }}</td
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
                        Ajouter une promotion
                    </h3>
                </div>
                <div class="card-body flex flex-col gap-5">
                    <x-forms.input name="name" :label="__('Nom')" />

                    <x-forms.input name="description" :label="__('Description')" />

                    <x-forms.input type="date" name="year" :label="__('Début de l\'année')" placeholder="" />

                    <x-forms.input type="date" name="year" :label="__('Fin de l\'année')" placeholder="" />

                    <x-forms.primary-button>
                        {{ __('Valider') }}
                    </x-forms.primary-button>
                </div>
                <form id="update-cohort-form" method="POST" action="{{ route('cohorts.update') }}">
                    @csrf
                    <label for="name">Nom du Cohort</label>
                    <input type="text" name="name" id="name" value="{{ $cohort->name }}">
                    <button type="submit">Mettre à jour</button>
                </form>

            </div>
        </div>
    </div>
    <!-- end: grid -->

    <script>
        document.getElementById('update-cohort-form').addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(this);

            fetch('{{ route('cohorts.update') }}', {
                method: 'POST',
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                },
                body: formData,
            })
        });

    </script>
</x-app-layout>
