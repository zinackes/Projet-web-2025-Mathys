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

    <button onclick="addColumnToDB()" class="!bg-gray-200/60 hover:!bg-gray-200 duration-300 !mt-10 !font-medium text-white px-4 flex justify-start items-center gap-1 py-2 rounded-lg text-md">
        <i class="ki-filled ki-plus"></i> Ajouter une colonne
    </button>

    <button class="hidden" data-modal-toggle="#retro_modal" id="openModalBtn">Ouvrir le modal</button>

    <div class="modal " data-modal="true" id="retro_modal">
        <div class="modal-content modal-center-y max-w-[600px] !ml-0 !mr-0" style="  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);">
            <div class="modal-header">
                <h3 class="modal-title !text-xl" id="retro_modal_title">
                    Modification de la carte
                </h3>
                <button class="btn btn-xs btn-icon btn-light" data-modal-dismiss="true">
                    <i class="ki-outline ki-cross">
                    </i>
                </button>
            </div>
            <div class="modal-body scrollable-y py-0 my-5 pl-6 pr-3 mr-3">
                <input type="text" id="retro_modal_text">
                <input type="number" class="hidden" id="retro_modal_id">
            </div>
            <div class="card-footer justify-end">
                <div class="flex gap-4">
                    <button class="btn btn-light hidden" data-modal-dismiss="true" id="retro_modal_dismiss">
                        Cancel
                    </button>
                    <button class="btn btn-danger" data-modal-dismiss="true" onclick="
                    deleteCardInBdd(document.getElementById('retro_modal_id').value)">
                        Supprimer
                    </button>
                    <button class="btn btn-primary" onclick="updateCardNameToDB((document.getElementById('retro_modal_text').value),
                    document.getElementById('retro_modal_id').value)">
                        Modifier
                    </button>
                </div>
            </div>
        </div>
    </div>


    <meta name="csrf-token" content="{{ csrf_token() }}">

    <script>
        window.canDelete = @json(Auth::user()->can('viewForm', \App\Models\Retros::class));
    </script>

</x-app-layout>
