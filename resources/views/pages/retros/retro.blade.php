<x-app-layout>
    <x-slot name="header">
        <h1 class="flex items-center gap-1 text-sm font-normal">
            <span class="text-gray-700">
                {{ __('Retrospectives') }}
            </span>
        </h1>
    </x-slot>

    <div id="dd"></div>

    <button onclick="addBoard()" class="bg-blue-500 text-white px-2 py-1 rounded">
        Add Column
    </button>


    <meta name="csrf-token" content="{{ csrf_token() }}">


    <script src="{{ asset('kanban/dist/jkanban.js') }}"></script>
    <script src="sweetalert2.all.min.js"></script>
    <script >
        console.log(@json($retro));


        var kanban = new jKanban({
            element          : '#dd',                                           // selector of the kanban container
            gutter           : '15px',                                       // gutter of the board
            widthBoard       : '250px',                                      // width of the board
            responsivePercentage: false,                                    // if it is true I use percentage in the width of the boards and it is not necessary gutter and widthBoard
            dragItems        : true,                                         // if false, all items are not draggable
            boards           : @json($retro),                                           // json of boards
            dragBoards       : false,                                         // the boards are draggable, if false only item can be dragged
            itemAddOptions: {
                enabled: true,                                              // add a button to board for easy item creation
                content: '+',                                                // text or html content of the board button
                class: 'kanban-title-button btn btn-default btn-xs',         // default class of the button
                footer: true                                                // position the button on footer
            },
            itemHandleOptions: {
                enabled             : false,                                 // if board item handle is enabled or not
                handleClass         : "item_handle",                         // css class for your custom item handle
                customCssHandler    : "drag_handler",                        // when customHandler is undefined, jKanban will use this property to set main handler class
                customCssIconHandler: "drag_handler_icon",                   // when customHandler is undefined, jKanban will use this property to set main icon handler class. If you want, you can use font icon libraries here
                customHandler       : "<span class='item_handle'>+</span> %title% "  // your entirely customized handler. Use %title% to position item title
                                                                                     // any key's value included in item collection can be replaced with %key%
            },
            click            : function (el) {
                console.log("retro id : " + @json($TheRetro->id));
            },                             // callback when any board's item are clicked
            context          : function (el, event) {},                      // callback when any board's item are right clicked
            dragEl           : function (el, source) {
            },                     // callback when any board's item are dragged
            dragendEl        : function (el) {
            },                             // callback when any board's item stop drag
            dropEl           : function (el, target, source, sibling) {
                console.log(el);
                console.log(target.parentElement);
                let elementId = parseInt(el.getAttribute('data-eid').match(/\d+$/)[0]);
                updateCardToDB(target.parentElement, el.textContent, elementId);
            },    // callback when any board's item drop in a board
            dragBoard        : function (el, source) {},                     // callback when any board stop drag
            dragendBoard     : function (el) {},                             // callback when any board stop drag
            buttonClick      : function(el, boardId) {
                addElement(boardId, el);
            },                     // callback when the board's button is clicked
            propagationHandlers: [],                                         // the specified callback does not cancel the browser event. possible values: "click", "context"
        })


        function createItem(id, title, boardId) {
            const itemId = "item-id-" + id;

            const itemHtml = `
        <div class="kanban-item"
             data-eid="${itemId}"
             data-username="username">
             ${title}
        </div>
    `;

            const parent = document.querySelector(`[data-id="${boardId}"]`);

            const kanbanDrag = parent.querySelector('.kanban-drag');

            if (kanbanDrag) {
                kanbanDrag.innerHTML += itemHtml;
            } else {
                console.log("Élément 'kanban-drag' introuvable dans le parent.");
            }
        }

        function deleteColumn(el){
            deleteColumnInBdd(el.parentElement.parentElement.getAttribute('data-id'));
        }

        function deleteColumnInBdd(columnId) {
            Swal.fire({
                title: "Voulez-vous vraiment supprimer cette colonne ?",
                showDenyButton: true,
                confirmButtonText: "Oui, supprimer",
                denyButtonText: `Annuler`
            }).then((result) => {
                if (result.isConfirmed) {
                    const id = columnId.split('-').pop();

                    fetch(`/retro/deleteCard/${id}`, {
                        method: 'DELETE',
                        headers: {
                            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                        }
                    })
                        .then(response => response.json())
                        .then(data => {
                            console.log(data.message);
                            kanban.removeBoard(columnId);
                            Swal.fire("Supprimé !", "", "success");
                        })
                        .catch(error => {
                            console.error('Erreur lors de la suppression :', error);
                            Swal.fire("Erreur lors de la suppression", "", "error");
                        });

                } else if (result.isDenied) {
                    Swal.fire("Suppression annulée", "", "info");
                }
            });
        }


        function createColumn(id, title){
            kanban.addBoards([
                {
                    id: 'column-id-' +id,
                    title: title,
                    item: []
                }
            ])
        }



        function addElement(boardId, element){
            addCardToDB(boardId)
        }

        function addBoard() {
            addColumnToDB();
        }

        function updateCardToDB(board, title, elementId){
            fetch(`/retro/updateCard/${elementId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                },
                body: JSON.stringify({
                    column_id: Number(board.getAttribute('data-id').split('-').pop()),
                    name: title,
                })
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Column mis a jour:', data);

                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }

        function addColumnToDB() {
            Swal.fire({
                title: 'Nom de la colonne',
                input: 'text',
                inputLabel: 'Entrez un titre pour la colonne',
                inputPlaceholder: 'Ex: À améliorer',
                showCancelButton: true,
                confirmButtonText: 'Ajouter',
                cancelButtonText: 'Annuler',
                inputValidator: (value) => {
                    if (!value) {
                        return 'Le titre est requis !';
                    }
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    const title = result.value;

                    fetch('/retro/column', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                        },
                        body: JSON.stringify({
                            retro_id: @json($TheRetro->id),
                            name: title,
                        })
                    })
                        .then(response => response.json())
                        .then(data => {
                            console.log('Column added:', data);
                            createColumn(data['id'], data['name']);
                        })
                        .catch(error => {
                            console.error('Error:', error);
                        });
                }
            });
        }


        function addCardToDB(boardId){
            Swal.fire({
                title: 'Nom de la carte',
                input: 'text',
                inputLabel: 'Entrez un titre pour la carte',
                inputPlaceholder: 'Ex: Améliorer l\'UX',
                showCancelButton: true,
                confirmButtonText: 'Ajouter',
                cancelButtonText: 'Annuler',
                inputValidator: (value) => {
                    if (!value) {
                        return 'Le titre est requis!';
                    }
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    const title = result.value;

                    fetch('/retro/card', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                        },
                        body: JSON.stringify({
                            retro_id: @json($TheRetro->id),
                            column_id: boardId.split('-').pop(),
                            user_id: @json(auth()->user()->id),
                            name: title,
                        })
                    })
                        .then(response => response.json())
                        .then(data => {
                            console.log(data);
                            createItem(data["id"], data['name'], boardId);
                        })
                        .catch(error => {
                            console.error('Error:', error);
                        });
                }
            });
        }
    </script>
</x-app-layout>
