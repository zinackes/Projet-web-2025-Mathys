<x-app-layout>
    <x-slot name="header">
        <h1 class="flex items-center gap-1 text-sm font-normal">
            <span class="text-gray-700">
                {{ __('Groupes') }}
            </span>
        </h1>
    </x-slot>

    <div class="grid">
        <div class="card card-grid min-w-full">
            <div class="card-header py-5 flex-wrap">
                <h3 class="card-title">
                    Static DataTable
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
                                <th class="min-w-[185px]">
         <span class="sort">
          <span class="sort-label">
           Description
          </span>
          <span class="sort-icon">
          </span>
         </span>
                                </th>
                                <th class="min-w-[100px]">
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
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($groups as $group)
                                <tr>
                                    <td>
                                        {{ $group->project_name}}
                                    </td>
                                    <td>

                                    </td>
                                    <td>

                                    </td>
                                    <td>
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
