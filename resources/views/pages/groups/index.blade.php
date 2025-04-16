<x-app-layout>
    <x-slot name="header">
    </x-slot>

    <div class="grid">
        <div class="card card-grid min-w-full">
            <div class="card-header py-5 flex-wrap">
                <h3 class="card-title">
                    Liste des groupes
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
           Nom du Projet
          </span>
          <span class="sort-icon">
          </span>
         </span>
                                </th>
                                <th class="min-w-[185px] text-center">
         <span class="sort">
          <span class="sort-label">
           Description
          </span>
          <span class="sort-icon">
          </span>
         </span>
                                </th>
                                <th class="min-w-[120px] text-center">
         <span class="sort">
          <span class="sort-label">
           Promotion
          </span>
          <span class="sort-icon">
          </span>
         </span>
                                </th>
                                <th class="w-[105px] text-center">
         <span class="sort">
          <span class="sort-label">
           Status
          </span>
          <span class="sort-icon">
          </span>
         </span>
                                </th>
                                <th class="w-[60px] text-center">
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($groups as $group)
                                <tr>
                                    <td>
                                        {{ $group->project_name}}
                                    </td>
                                    <td>
                                        {{ $group->description }}
                                    </td>
                                    <td>
                                        {{$group->cohort->name}}
                                    </td>
                                    <td>
                                        @php
                                            $start = \Carbon\Carbon::parse($group->start_date);
                                            $end = \Carbon\Carbon::parse($group->end_date);

                                            $isBeforeTime = !\Carbon\Carbon::parse($group->start_date)->isPast();
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
                                        @php
                                            $encryptedProjectName = Illuminate\Support\Facades\Crypt::encryptString($group->project_name);
                                        @endphp

                                        <a class="group" href="{{ route('group.show', ['project_name' => $encryptedProjectName]) }}">
                                            <i class="ki-filled ki-paper-plane group-hover:text-primary duration-300"></i>
                                        </a>

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
</x-app-layout>
