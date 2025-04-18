const params = new URLSearchParams(window.location.search);
let retroData = {};
let kanban = null;

const cohortId = params.get('cohortId');
const retroId = params.get('retroId');
let modalBtnDismiss = document.getElementById('retro_modal_dismiss');

const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

fetch(`/retro/fetchdata/${cohortId}/${retroId}`, {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
})
    .then(response => {
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données');
        }
        return response.json();
    })
    .then(data => {
        retroData = data;

        initializeKanban(retroData.response);
    })
    .catch(error => {
        console.error('Erreur lors de la requête GET :', error);
    });

Echo.channel(`retro.${retroId}`)
    .listen('.Retro.Updated', (event) => {
        if(event.retro.user_id !== retroData.userId) {
            const element = document.querySelector(`[data-eid="item-id-${event.retro.id}"]`);
            element.textContent = event.retro.name;
        }
    });

Echo.channel(`retro.${retroId}`)
    .listen('.Board.Create', (event) => {
        createColumn(event.board.id, event.board.name);

    });

Echo.channel(`retro.${retroId}`)
    .listen('.Card.Create', (event) => {
        if(event.card.user_id !== retroData.userId){
            createCard(Number(event.card.column_id), event.card.name, event.card.id);
        }
    });

Echo.channel(`retro.${retroId}`)
    .listen('.Card.Move', (event) => {
        changeCardColumn(event.card.id, Number(event.card.column_id), event.card.name);
    });

Echo.channel(`retro.${retroId}`)
    .listen('.Board.Delete', (event) => {
        deleteColumn(event.board.id);
    });

Echo.channel(`retro.${retroId}`)
    .listen('.Card.Delete', (event) => {
        console.log("test");
        if(event.card.user_id !== retroData.userId) {
            deleteCard(event.card.id);
        }
    });


function initializeKanban(data) {
    // Initialisation de jKanban dans une fonction
    kanban = new jKanban({
        element: '#dd',
        gutter: '0px',
        widthBoard: 'auto',
        responsivePercentage: false,
        dragItems: true,
        boards: data,
        dragBoards: false,
        itemAddOptions: {
            enabled: true,
            content: '+ Ajouter une carte',
            class: 'kanban-title-button w-full justify-start flex !text-sm !font-medium rounded-lg px-2 py-2 hover:!bg-gray-300/70 duration-300',
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
            let elementId = parseInt(el.getAttribute('data-eid').match(/\d+$/)[0]);
            let modalBtn = document.getElementById('openModalBtn');
            let modalText = document.getElementById('retro_modal_text');
            let modalId = document.getElementById('retro_modal_id');
            modalText.value = el.textContent;
            modalId.value = elementId;
            modalBtn.click();
            //updateCardNameToDB(el.textContent, elementId);
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
}


function changeCardColumn(cardId, columnId, text){
    kanban.removeElement(`item-id-${cardId}`);
    createCard(columnId, text, cardId);
}

function deleteColumn(boardId) {
    if (!kanban) {
        console.error("Kanban non initialisé !");
        return;
    }
    console.log("ID BOARD: " + boardId);
    kanban.removeBoard(`column-id-${boardId}`);
}


window.deleteColumnInBdd = deleteColumnInBdd;

function deleteColumnInBdd(el) {
    Swal.fire({
        title: "Voulez-vous vraiment supprimer cette colonne ?",
        showDenyButton: true,
        confirmButtonText: "Oui, supprimer",
        denyButtonText: `Annuler`
    }).then((result) => {
        if (result.isConfirmed) {
            const id = el.parentElement.parentElement.getAttribute('data-id').split('-').pop();

            fetch(`/retro/column/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    'X-CSRF-TOKEN': csrfToken
                }
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data.message);
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
    if (!kanban) {
        console.error("Kanban non initialisé !");
        return;
    }
    kanban.addBoards([
        {
            id: 'column-id-' + id,
            title: title,
            item: []
        }
    ]);
}

function createCard(boardId, text, id) {
    if (!kanban) {
        console.error("Kanban non initialisé !");
        return;
    }
    kanban.addElement(('column-id-' + boardId),
        {
            id: "item-id-" +id,
            title: text
        }
    );
}

function addElement(boardId) {
    addCardToDB(boardId);
}


function deleteCard(id) {
    if (!kanban) {
        console.error("Kanban non initialisé !");
        return;
    }
    console.log("ID Carte: " + id);
    kanban.removeElement(`item-id-${id}`);}

window.deleteCardInBdd = deleteCardInBdd;
function deleteCardInBdd(id){
    fetch(`/retro/card/delete/${id}`, {
        method: 'DELETE',
        headers: {
            'X-CSRF-TOKEN': csrfToken
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            deleteCard(data.card.id);
        })
        .catch(error => {
            console.error('Erreur lors de la suppression :', error);
        });
}



window.updateCardNameToDB = updateCardNameToDB;
function updateCardNameToDB(title, elementId) {
    fetch(`/retro/card/update/name/${elementId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': csrfToken
        },
        body: JSON.stringify({
            name: title
        })
    })
        .then(response => response.json())
        .then(data => {
            console.log('Carte mise à jour :', data);
            const element = document.querySelector(`[data-eid="item-id-${data.column.id}"]`);
            element.textContent = data.column.name;
            modalBtnDismiss.click();
        })
        .catch(error => {
            console.error('Erreur :', error);
        });
}

function updateCardToDB(board, title, elementId) {
    if (!kanban) {
        console.error("Kanban non initialisé !");
        return;
    }
    fetch(`/retro/card/update/${elementId}`, {
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

window.addColumnToDB = function() {
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
                    Swal.fire({
                        icon: 'success',
                        title: 'Colonne créée',
                        text: `La colonne "${data.name}" a bien été ajoutée.`,
                        timer: 2000,
                        showConfirmButton: false
                    });
                })
                .catch(error => {
                    console.error('Erreur :', error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Erreur',
                        text: 'Une erreur est survenue lors de la création de la colonne.',
                    });
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
                    user_id: retroData.userId,
                    name: title
                })
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Carte ajoutée :', data);
                    createCard(Number(data.column_id), data.name, data.id);
                })
                .catch(error => {
                    console.error('Erreur :', error);
                });
        }
    });
}
