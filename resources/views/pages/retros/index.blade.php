<x-app-layout>
    <x-slot name="header">
        <h1 class="flex items-center gap-1 text-sm font-normal">
            <span class="text-gray-700">
                {{ __('Retrospectives') }}
            </span>
        </h1>
    </x-slot>

    <div class="grid
    @can('viewForm', \App\Models\Retros::class)
    lg:grid-cols-3 gap-3 lg:gap-5 items-stretch
    @endcan">
        <div class="lg:col-span-2">
                <div class="grid">
                    <div class="card card-grid min-w-full">
                        <div class="card-header py-5 flex-wrap">
                            <h3 class="card-title">
                                Vos rétrospectives
                            </h3>
                        </div>
                        <div class="card-body">
                            <div data-datatable="true" data-datatable-page-size="5" data-datatable-state-save="true" id="datatable_1">
                                <div class="scrollable-x-auto">
                                    <table class="table table-auto table-border" data-datatable-table="true">
                                        <thead>
                                        <tr>
                                            <th class="w-[185px] text-center">
         <span class="sort asc">
          <span class="sort-label">
           Nom
          </span>
          <span class="sort-icon">
          </span>
         </span>
                                            </th>
                                            <th class="w-[185px]">
         <span class="sort">
          <span class="sort-label">
           Organisateur
          </span>
          <span class="sort-icon">
          </span>
         </span>
                                            </th>
                                            <th class="w-[185px]">
         <span class="sort">
          <span class="sort-label">
           Date de début
          </span>
          <span class="sort-icon">
          </span>
         </span>
                                            </th>
                                            <th class="w-[185px]">
         <span class="sort">
          <span class="sort-label">
           Date de fin
          </span>
          <span class="sort-icon">
          </span>
         </span>
                                            </th>
                                            <th class="w-[100px]">
         <span class="sort">
          <span class="sort-label">
           Status
          </span>
          <span class="sort-icon">
          </span>
         </span>
                                            </th>
                                            <th class="w-[60px]">
                                            </th>
                                            <th class="w-[60px]">
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        @foreach($retros as $retro)
                                            <tr>
                                                <td class="text-center">
                                                    {{$retro->name}}
                                                </td>
                                                <td>
                                                    {{$retro->user->last_name}} {{$retro->user->first_name}}
                                                </td>
                                                <td class="text-center">
                                                    {{ \Carbon\Carbon::parse($retro->start_date)->format('d/m/Y H:i') }}
                                                </td>
                                                <td class="text-center">
                                                    {{ \Carbon\Carbon::parse($retro->end_date)->format('d/m/Y H:i') }}
                                                </td>
                                                <td class="text-center !ps-2 !pe-2">
                                                    @php

                                                        $start = \Carbon\Carbon::parse($retro->start_date);
                                                        $end = \Carbon\Carbon::parse($retro->end_date);

                                                        $isBeforeTime = !\Carbon\Carbon::parse($retro->start_date)->isPast();
                                                        $hasBegun = now()->between($start, $end);
                                                    @endphp

                                                    @if ($isBeforeTime)
                                                        <div class="bg-orange-200/70 rounded-lg flex items-center justify-evenly">
                                                            <span class="badge badge-dot size-2 bg-warning"></span>
                                                            <p class="text-xs text-orange-500/80">Attente</p>
                                                        </div>
                                                    @elseif($hasBegun)

                                                        <div class="bg-green-200/70 rounded-lg flex items-center justify-evenly">
                                                            <span class="badge badge-dot size-2 bg-success"></span>
                                                            <p class="text-xs text-green-500/80">En cours</p>
                                                        </div>
                                                    @else

                                                        <div class="bg-gray-200/70 rounded-lg flex items-center justify-evenly">
                                                            <span class="badge badge-dot size-2 bg-gray-400"></span>
                                                            <p class="text-xs text-gray-500/80">Terminé</p>
                                                        </div>
                                                    @endif
                                                </td>
                                                <td class="text-center">
                                                    @if(!$hasBegun)
                                                        <i class="ki-filled ki-paper-plane cursor-not-allowed"></i>
                                                    @else
                                                        <a class="group" href={{route("retro.show",
                                                                    [
                                                                     'cohortId' => $retro->cohort_id,
                                                                     'retroId' => $retro->id,
                                                                    ])}}>
                                                            <i class="ki-filled ki-paper-plane group-hover:text-primary duration-300"></i>
                                                        </a>
                                                    @endif

                                                </td>
                                            </tr>
                                        @endforeach
                                        </tbody>
                                    </table>
                                </div>
                                <div class="card-footer justify-center md:justify-between flex-col md:flex-row gap-3 text-gray-600 text-2sm font-medium">
                                    <div class="flex items-center gap-2">
                                        Show
                                        <select class="select select-sm w-16" data-datatable-size="true" name="perpage">
                                        </select>
                                        per page
                                    </div>
                                    <div class="flex items-center gap-4">
      <span data-datatable-info="true">
      </span>
                                        <div class="pagination" data-datatable-pagination="true">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>

        <div class="lg:col-span-1">
            @can('viewForm', \App\Models\Retros::class)
                <div class="card ">
                    <div class="card-header">
                        <h3 class="card-title">
                            Créer une retro
                        </h3>
                    </div>
                    <form method="POST" action={{route("retro.store")}}>
                        @csrf
                        <div class="card-body">
                            <x-forms.input label="{{ __('Nom') }}" name="name"
                                           :value="old('name')" type="text" placeholder="Le nom de la retro.."
                                           :messages="$errors->get('name')"/>


                            <div class="w-full">
                                <div class="flex items-baseline flex-col flex-wrap lg:flex-nowrap gap-2.5">
                                    <label class="form-label max-w-32">
                                        Description
                                    </label>
                                    <textarea class="textarea" name="description" placeholder="La description de la retro.." rows="6"></textarea>
                                </div>
                            </div>

                            <div class="w-full">
                                <div class="flex items-baseline flex-col flex-wrap lg:flex-nowrap gap-2.5">
                                    <label class="form-label max-w-32">
                                        Promotions
                                    </label>
                                    <select class="select" name="cohort_id">
                                        @foreach($cohorts as $cohort)
                                            <option value={{{$cohort->id}}}>
                                                {{$cohort->name}}
                                            </option>

                                        @endforeach
                                    </select>
                                </div>
                            </div>

                            <div class="flex flex-wrap w-full">
                                <x-forms.input class="w-full" label="{{ __('Date de début') }}" name="start_date"
                                               :value="old('start_date')" type="datetime-local"
                                               :messages="$errors->get('start_date')"/>

                                <x-forms.input class="w-full" label="{{ __('Date de fin') }}" name="end_date"
                                               :value="old('end_date')" type="datetime-local"
                                               :messages="$errors->get('end_date')"/>

                            </div>

                        </div>
                        <div class="card-footer justify-center">
                            <x-forms.primary-button>
                                {{ __('Valider') }}
                            </x-forms.primary-button>
                        </div>
                    </form>

                </div>
            @endcan
        </div>

    </div>
</x-app-layout>
