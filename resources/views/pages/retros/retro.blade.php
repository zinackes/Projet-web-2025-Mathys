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
    <script >
        console.log(@json($retro));


        var kanban = new jKanban({
            element          : '#dd',                                           // selector of the kanban container
            gutter           : '15px',                                       // gutter of the board
            widthBoard       : '250px',                                      // width of the board
            responsivePercentage: true,                                    // if it is true I use percentage in the width of the boards and it is not necessary gutter and widthBoard
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
                console.log(target);
            },    // callback when any board's item drop in a board
            dragBoard        : function (el, source) {},                     // callback when any board stop drag
            dragendBoard     : function (el) {},                             // callback when any board stop drag
            buttonClick      : function(el, boardId) {
                addElement(boardId, el);
            },                     // callback when the board's button is clicked
            propagationHandlers: [],                                         // the specified callback does not cancel the browser event. possible values: "click", "context"
        })

        function createItem(id, title) {
            const itemId = "item-id-" + id;

            const itemHtml = `
        <div class="kanban-item"
             data-eid="${itemId}"
             data-username="username">
             ${title}
        </div>
    `;

            const parent = document.querySelector(`[data-id="${id}"]`);

            const kanbanDrag = parent.querySelector('.kanban-drag');

            if (kanbanDrag) {
                kanbanDrag.innerHTML += itemHtml;
            } else {
                console.log("Élément 'kanban-drag' introuvable dans le parent.");
            }
        }



        function addElement(boardId, element){
            addCardToDB("lalalal", boardId)
        }

        function addBoard() {
            addColumnToDB("test");
        }

        function addColumnToDB(title) {
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
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }

        function addCardToDB(title, boardId){
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
                    createItem(data["id"], data['name'], );
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    </script>
</x-app-layout>
