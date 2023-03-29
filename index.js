function todoList() {
  const todoForm = document.getElementById('todo-form')
  const todoInput = document.getElementById('todo-input')
  const todoList = document.getElementById('todo-list')

  // Ajouter un événement pour le formulaire d'ajout de tâche
  todoForm.addEventListener('submit', function (event) {
    // Empêcher le formulaire de se soumettre
    event.preventDefault()

    // Récupérer la valeur de l'input
    const todoText = todoInput.value

    // Créer un nouvel élément li pour la tâche
    const todoItem = document.createElement('li')
    todoItem.textContent = todoText

    // Ajouter un bouton pour supprimer la tâche
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'
    deleteButton.classList.add('btn', 'btn-danger', 'btn-sm', 'float-right')
    todoItem.appendChild(deleteButton)

    // Ajouter un événement pour le bouton de suppression
    deleteButton.addEventListener('click', function () {
      todoItem.remove()
    })

    // Ajouter un événement pour cocher/décocher la tâche
    todoItem.addEventListener('click', function () {
      todoItem.classList.toggle('completed')
    })

    // Ajouter la tâche à la liste
    todoList.appendChild(todoItem)

    // Réinitialiser l'input
    todoInput.value = ''
  })
}
