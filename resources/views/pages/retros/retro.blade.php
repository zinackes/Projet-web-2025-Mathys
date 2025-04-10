<x-app-layout>
    <x-slot name="header">
        <h1 class="flex items-center gap-1 text-sm font-normal">
            <span class="text-gray-700">
                {{ __('Retrospectives') }}
            </span>
        </h1>
    </x-slot>

    <div id="dd"></div>

    <button onclick="addColumnToDB()" class="bg-blue-500 text-white px-2 py-1 rounded">
        Add Column
    </button>


    <meta name="csrf-token" content="{{ csrf_token() }}">


    <script>
        window.retroData = {
            retro: @json($retro),
            retroId: @json($TheRetro->id),
            userId: @json(auth()->user()->id),
            canDeleteColumn: @json(auth()->user()->can('viewForm', \App\Models\Retros::class)),
            csrfToken: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        };
    </script>

    <script src="{{ asset('kanban/dist/jkanban.js') }}"></script>
    <script src="sweetalert2.all.min.js"></script>
    <script src="{{asset('js/kanban.js')}}"></script>

</x-app-layout>
