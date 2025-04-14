<x-app-layout>
    <x-slot name="header">
        <h1 class="flex items-center gap-1 text-sm font-normal">
            <span class="text-gray-700">
                {{ __('Liste des groupes pour le projet ') . $groups[0]->project_name }}
            </span>
        </h1>
    </x-slot>

    <div class="flex flex-col gap-8">
        @foreach($groups as $group)
            @php
                $isInGroup = $studentsByGroup[$group->id]->contains('user_id', auth()->id());
            @endphp
            <div data-accordion="true" class="border border-gray-200 rounded-lg {{ $isInGroup ? '!border-green-200' : ''  }}">
                <div class="accordion-item active [&:not(:last-child)]:border-b border-b-gray-200 rounded-md
                {{ $isInGroup ? '!bg-green-100' : ''  }}" data-accordion-item="true" id="accordion_1_item_1">
                    <button class="accordion-toggle py-4 gap-4 group bg-gray-100 rounded-t-md !justify-start px-3
                    {{ $isInGroup ? '!bg-green-200' : ''  }}" data-accordion-toggle="#accordion_1_content_{{ $group->id }}">
                        <i class="ki-filled ki-down text-gray-600 text-2sm accordion-active:hidden block">
                        </i>
                        <i class="ki-filled ki-up text-gray-600 text-2sm accordion-active:block hidden">
                        </i>
                        <span class="text-base text-gray-900 font-medium flex gap-3 items-center">
                {{$group->group_name}}
                                <span class="badge badge-pill badge-primary !px-2 !py-1 {{ $isInGroup ? 'badge-success' : ''  }}">
                                    {{$studentsByGroup[$group->id]->count()}}
                                </span>
               </span>
                    </button>
                    <div class="accordion-content rounded-lg px-3" id="accordion_1_content_{{ $group->id }}">
                        <table class="table align-middle text-gray-700 font-medium text-sm">

                            <tbody>
                            @foreach($studentsByGroup[$group->id] as $studentGroup)
                                <tr>
                                    <td class="w-[0px] !px-1 {{ $isInGroup ? '!border-green-300' : ''  }}">
                                        @if($studentGroup->role === "développeur")
                                            <i class="ki-filled ki-code"></i>
                                        @else
                                            <i class="ki-filled ki-crown text-warning text-md"></i>
                                        @endif
                                    </td>
                                    <td class="!pl-2 text-md font-bold {{ $isInGroup ? '!border-green-300' : ''  }}">{{ $studentGroup->user->last_name}} {{ $studentGroup->user->first_name}}</td>
                                    <td class="{{ $isInGroup ? '!border-green-300' : ''  }}">
                                        {{ $studentGroup->role}}
                                    </td>
                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                        <div class="my-2 flex items-center justify-evenly gap-4">
                            <a href="" class="text-sm duration-400 hover:bg-green-500 rounded-lg px-3 py-1 hover:!text-white flex items-center gap-2">
                                <i class="ki-filled ki-github"></i>
                                Github
                            </a>
                            @if($isInGroup)
                                <button
                                    onclick="window.location.href='{{ route('group.dashboard', ['group' => $group, 'group_name' => $group->group_name]) }}'"

                                    class="text-sm duration-400 hover:!bg-green-500 rounded-lg px-3 py-1 hover:!text-white flex items-center gap-2"
                                >
                                    <i class="ki-filled ki-abstract-28"></i>
                                    Dashboard
                                </button>
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        @endforeach
    </div>
</x-app-layout>
