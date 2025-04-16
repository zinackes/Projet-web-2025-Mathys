/******/ (() => { // webpackBootstrap
/*!********************************!*\
  !*** ./resources/js/kanban.js ***!
  \********************************/
var params = new URLSearchParams(window.location.search);
var retroData = {};
var kanban = null;
var cohortId = params.get('cohortId');
var retroId = params.get('retroId');
var modalBtnDismiss = document.getElementById('retro_modal_dismiss');
var csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
Echo.channel("retro.".concat(retroId)).listen('.Retro.Updated', function (event) {
  var element = document.querySelector("[data-eid=\"item-id-".concat(event.retro.id, "\"]"));
  element.textContent = event.retro.name;
});
Echo.channel("retro.".concat(retroId)).listen('.Board.Create', function (event) {
  createColumn(event.board.id, event.board.name);
});
Echo.channel("retro.".concat(retroId)).listen('.Card.Create', function (event) {
  createCard(Number(event.card.column_id), event.card.name, event.card.id);
});
Echo.channel("retro.".concat(retroId)).listen('.Card.Move', function (event) {
  console.log(event);
  changeCardColumn(event.card.id, Number(event.card.column_id), event.card.name);
});
Echo.channel("retro.".concat(retroId)).listen('.Board.Delete', function (event) {
  deleteColumn(event.board.id);
});
Echo.channel("retro.".concat(retroId)).listen('.Card.Delete', function (event) {
  deleteCard(event.card.id);
});
fetch("/retro/fetchdata/".concat(cohortId, "/").concat(retroId), {
  method: 'GET',
  headers: {
    'Accept': 'application/json'
  }
}).then(function (response) {
  if (!response.ok) {
    throw new Error('Erreur lors de la récupération des données');
  }
  return response.json();
}).then(function (data) {
  retroData = data;
  initializeKanban(retroData.response);
  console.log(retroData);
})["catch"](function (error) {
  console.error('Erreur lors de la requête GET :', error);
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
    dragBoards: true,
    itemAddOptions: {
      enabled: true,
      content: '+ Ajouter une carte',
      "class": 'kanban-title-button w-full justify-start flex !text-sm !font-medium rounded-lg px-2 py-2 hover:!bg-gray-300/70 duration-300',
      footer: true
    },
    itemHandleOptions: {
      enabled: false,
      handleClass: "item_handle",
      customCssHandler: "drag_handler",
      customCssIconHandler: "drag_handler_icon",
      customHandler: "<span class='item_handle'>+</span> %title%"
    },
    click: function click(el) {
      var elementId = parseInt(el.getAttribute('data-eid').match(/\d+$/)[0]);
      var modalBtn = document.getElementById('openModalBtn');
      var modalText = document.getElementById('retro_modal_text');
      var modalId = document.getElementById('retro_modal_id');
      modalText.value = el.textContent;
      modalId.value = elementId;
      modalBtn.click();
      //updateCardNameToDB(el.textContent, elementId);
    },
    dropEl: function dropEl(el, target) {
      var elementId = parseInt(el.getAttribute('data-eid').match(/\d+$/)[0]);
      updateCardToDB(target.parentElement, el.textContent, elementId);
    },
    buttonClick: function buttonClick(el, boardId) {
      addElement(boardId, el);
    },
    propagationHandlers: []
  });
}
function changeCardColumn(cardId, columnId, text) {
  kanban.removeElement("item-id-".concat(cardId));
  createCard(columnId, text, cardId);
}
function deleteColumn(boardId) {
  if (!kanban) {
    console.error("Kanban non initialisé !");
    return;
  }
  console.log("ID BOARD: " + boardId);
  kanban.removeBoard("column-id-".concat(boardId));
}
window.deleteColumnInBdd = deleteColumnInBdd;
function deleteColumnInBdd(el) {
  Swal.fire({
    title: "Voulez-vous vraiment supprimer cette colonne ?",
    showDenyButton: true,
    confirmButtonText: "Oui, supprimer",
    denyButtonText: "Annuler"
  }).then(function (result) {
    if (result.isConfirmed) {
      var id = el.parentElement.parentElement.getAttribute('data-id').split('-').pop();
      fetch("/retro/column/delete/".concat(id), {
        method: 'DELETE',
        headers: {
          'X-CSRF-TOKEN': csrfToken
        }
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        console.log(data.message);
        Swal.fire("Supprimé !", "", "success");
      })["catch"](function (error) {
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
  kanban.addBoards([{
    id: 'column-id-' + id,
    title: title,
    item: []
  }]);
}
function createCard(boardId, text, id) {
  if (!kanban) {
    console.error("Kanban non initialisé !");
    return;
  }
  kanban.addElement('column-id-' + boardId, {
    id: "item-id-" + id,
    title: text
  });
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
  kanban.removeElement("item-id-".concat(id));
}
window.deleteCardInBdd = deleteCardInBdd;
function deleteCardInBdd(id) {
  fetch("/retro/card/delete/".concat(id), {
    method: 'DELETE',
    headers: {
      'X-CSRF-TOKEN': csrfToken
    }
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log(data.message);
  })["catch"](function (error) {
    console.error('Erreur lors de la suppression :', error);
  });
}
window.updateCardNameToDB = updateCardNameToDB;
function updateCardNameToDB(title, elementId) {
  fetch("/retro/card/update/name/".concat(elementId), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-TOKEN': csrfToken
    },
    body: JSON.stringify({
      name: title
    })
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log('Carte mise à jour :', data);
    modalBtnDismiss.click();
  })["catch"](function (error) {
    console.error('Erreur :', error);
  });
}
function updateCardToDB(board, title, elementId) {
  if (!kanban) {
    console.error("Kanban non initialisé !");
    return;
  }
  fetch("/retro/card/update/".concat(elementId), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-TOKEN': csrfToken
    },
    body: JSON.stringify({
      column_id: Number(board.getAttribute('data-id').split('-').pop()),
      name: title
    })
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log('Colonne mise à jour :', data);
  })["catch"](function (error) {
    console.error('Erreur :', error);
  });
}
window.addColumnToDB = function () {
  Swal.fire({
    title: 'Nom de la colonne',
    input: 'text',
    inputLabel: 'Entrez un titre pour la colonne',
    inputPlaceholder: 'Ex: À améliorer',
    showCancelButton: true,
    confirmButtonText: 'Ajouter',
    cancelButtonText: 'Annuler',
    inputValidator: function inputValidator(value) {
      if (!value) {
        return 'Le titre est requis !';
      }
    }
  }).then(function (result) {
    if (result.isConfirmed) {
      var title = result.value;
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
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        console.log('Colonne ajoutée :', data);
        Swal.fire({
          icon: 'success',
          title: 'Colonne créée',
          text: "La colonne \"".concat(data.name, "\" a bien \xE9t\xE9 ajout\xE9e."),
          timer: 2000,
          showConfirmButton: false
        });
      })["catch"](function (error) {
        console.error('Erreur :', error);
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: 'Une erreur est survenue lors de la création de la colonne.'
        });
      });
    }
  });
};
function addCardToDB(boardId) {
  Swal.fire({
    title: 'Nom de la carte',
    input: 'text',
    inputLabel: 'Entrez un titre pour la carte',
    inputPlaceholder: 'Ex: Améliorer l\'UX',
    showCancelButton: true,
    confirmButtonText: 'Ajouter',
    cancelButtonText: 'Annuler',
    inputValidator: function inputValidator(value) {
      if (!value) {
        return 'Le titre est requis !';
      }
    }
  }).then(function (result) {
    if (result.isConfirmed) {
      var title = result.value;
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
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        console.log('Carte ajoutée :', data);
      })["catch"](function (error) {
        console.error('Erreur :', error);
      });
    }
  });
}
/******/ })()
;