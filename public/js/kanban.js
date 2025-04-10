const {
    retro,
    retroId,
    userId,
    canDeleteColumn,
    csrfToken
} = window.retroData;

const kanban = new jKanban({
    element: '#dd',
    gutter: '15px',
    widthBoard: '250px',
    responsivePercentage: false,
    dragItems: true,
    boards: retro,
    dragBoards: false,
    itemAddOptions: {
        enabled: true,
        content: '+',
        class: 'kanban-title-button btn btn-default btn-xs',
        footer: true
    },
    itemHandleOptions: {
        enabled: false,
        handleClass: "item_handle",
        customCssHandler: "drag_handler",
        customCssIconHandler: "drag_handler_icon",
        customHandler: "<span class='item_handle'>+</span> %title%"
    },
    click: function (el) {
        console.log("retro id : " + retroId);
    },
    dropEl: function (el, target) {
        let elementId = parseInt(el.getAttribute('data-eid').match(/\d+$/)[0]);
        updateCardToDB(target.parentElement, el.textContent, elementId);
    },
    buttonClick: function (el, boardId) {
        addElement(boardId, el);
    },
    propagationHandlers: []
});

function createItem(id, title, boardId) {
    const itemId = "item-id-" + id;
    const itemHtml = `
        <div class="kanban-item" data-eid="${itemId}" data-username="username">
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

function deleteColumn(el) {
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
                    'X-CSRF-TOKEN': csrfToken
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
        } else {
            Swal.fire("Suppression annulée", "", "info");
        }
    });
}

function createColumn(id, title) {
    kanban.addBoards([
        {
            id: 'column-id-' + id,
            title: title,
            item: []
        }
    ]);
}

function addElement(boardId) {
    addCardToDB(boardId);
}

function addBoard() {
    addColumnToDB();
}

function updateCardToDB(board, title, elementId) {
    fetch(`/retro/updateCard/${elementId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': csrfToken
        },
        body: JSON.stringify({
            column_id: Number(board.getAttribute('data-id').split('-').pop()),
            name: title
        })
    })
        .then(response => response.json())
        .then(data => {
            console.log('Colonne mise à jour :', data);
        })
        .catch(error => {
            console.error('Erreur :', error);
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
                    'X-CSRF-TOKEN': csrfToken
                },
                body: JSON.stringify({
                    retro_id: retroId,
                    name: title
                })
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Colonne ajoutée :', data);
                    createColumn(data.id, data.name);
                })
                .catch(error => {
                    console.error('Erreur :', error);
                });
        }
    });
}

function addCardToDB(boardId) {
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
                return 'Le titre est requis !';
            }
        }
    }).then((result) => {
        if (result.isConfirmed) {
            const title = result.value;

            fetch('/retro/card', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrfToken
                },
                body: JSON.stringify({
                    retro_id: retroId,
                    column_id: boardId.split('-').pop(),
                    user_id: userId,
                    name: title
                })
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Carte ajoutée :', data);
                    createItem(data.id, data.name, boardId);
                })
                .catch(error => {
                    console.error('Erreur :', error);
                });
        }
    });
}
