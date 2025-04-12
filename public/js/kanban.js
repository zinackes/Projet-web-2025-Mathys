/******/ (() => { // webpackBootstrap
/*!********************************!*\
  !*** ./resources/js/kanban.js ***!
  \********************************/
var params = new URLSearchParams(window.location.search);
var retroData = {};
var kanban = null;
var cohortId = params.get('cohortId');
var retroId = params.get('retroId');
var csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
window.Echo.channel("Retro-Channel").listen('Retro.Updated', function () {
  console.log('blabla');
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
  console.log(retroData.cohortId);
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
    dragBoards: false,
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
      updateCardNameToDB(el.textContent, elementId, el);
    },
    context: function context(el, event) {
      console.log(el, event);
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
function deleteColumn(el) {
  if (!kanban) {
    console.error("Kanban non initialisé !");
    return;
  }
  deleteColumnInBdd(el.parentElement.parentElement.getAttribute('data-id'));
}
window.deleteColumn = deleteColumn;
function deleteColumnInBdd(columnId) {
  Swal.fire({
    title: "Voulez-vous vraiment supprimer cette colonne ?",
    showDenyButton: true,
    confirmButtonText: "Oui, supprimer",
    denyButtonText: "Annuler"
  }).then(function (result) {
    if (result.isConfirmed) {
      var id = columnId.split('-').pop();
      fetch("/retro/column/delete/".concat(id), {
        method: 'DELETE',
        headers: {
          'X-CSRF-TOKEN': csrfToken
        }
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        console.log(data.message);
        kanban.removeBoard(columnId); // Utilisation de kanban ici
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
  kanban.addElement(boardId, {
    title: text,
    id: 'item-id-' + id
  });
}
function addElement(boardId) {
  addCardToDB(boardId);
}
function updateCardNameToDB(oldTitle, elementId, el) {
  Swal.fire({
    title: 'Modifier la carte',
    input: 'text',
    inputLabel: 'Nouveau titre de la carte',
    inputValue: oldTitle,
    showCancelButton: true,
    confirmButtonText: 'Mettre à jour',
    cancelButtonText: 'Annuler',
    inputValidator: function inputValidator(value) {
      if (!value) {
        return 'Le titre ne peut pas être vide !';
      }
    }
  }).then(function (result) {
    if (result.isConfirmed) {
      var newTitle = result.value;
      fetch("/retro/card/update/name/".concat(elementId), {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': csrfToken
        },
        body: JSON.stringify({
          name: newTitle
        })
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        console.log('Carte mise à jour :', data);
        Swal.fire('Carte mise à jour !', '', 'success');
        el.textContent = result.value;
      })["catch"](function (error) {
        console.error('Erreur :', error);
        Swal.fire('Erreur lors de la mise à jour', '', 'error');
      });
    }
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
        createColumn(data.id, data.name);
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
        createCard(boardId, data.name, data.id);
      })["catch"](function (error) {
        console.error('Erreur :', error);
      });
    }
  });
}
/******/ })()
;