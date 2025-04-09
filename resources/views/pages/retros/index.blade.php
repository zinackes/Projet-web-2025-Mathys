<x-app-layout>
    <x-slot name="header">
        <h1 class="flex items-center gap-1 text-sm font-normal">
            <span class="text-gray-700">
                {{ __('Retrospectives') }}
            </span>
        </h1>
    </x-slot>

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
                                <th class="min-w-[150px]">
         <span class="sort">
          <span class="sort-label">
           Description
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
                                    <td class="text-center">
                                        @php

                                            $start = \Carbon\Carbon::parse($retro->start_date);
                                            $end = \Carbon\Carbon::parse($retro->end_date);
                                        @endphp

                                        @if (!\Carbon\Carbon::parse($retro->start_date)->isPast())
                                            <span class="badge badge-dot size-2 bg-warning"></span>
                                        @elseif(now()->between($start, $end))
                                            <span class="badge badge-dot size-2 bg-success"></span>
                                        @else
                                            <span class="badge badge-dot size-2 bg-danger"></span>
                                        @endif
                                    </td>
                                    <td class="text-center">
                                        <a href={{route("retro.show", ['cohortId' => $retro->id])}}>
                                            <i class="ki-filled ki-paper-plane"></i>
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
