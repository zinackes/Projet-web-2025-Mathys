<x-app-layout>
    <x-slot name="header">
        <a href={{route('retro.index')}}>
            <div class="bg-gray-200/60 px-2 py-1 rounded-xl flex gap-2 items-center text-md hover:!bg-gray-300 duration-300 cursor-pointer">
                <i class="ki-filled ki-left"></i>
                Revenir
            </div>
        </a>
    </x-slot>

    <div id="dd"></div>

    <button onclick="addColumnToDB()" class="!bg-gray-200/60 hover:!bg-gray-200 duration-300 !font-medium text-white px-4 flex justify-start items-center gap-1 py-2 rounded-lg text-md">
        <i class="ki-filled ki-plus"></i> Ajouter une colonne
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
