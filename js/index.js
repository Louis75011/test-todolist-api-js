const form = document.querySelector('form');
const input = document.querySelector('#new-todo-item');
const list = document.querySelector('#todo-list');

// Variable pour stocker les tâches
let todoList = [];

// Fonction pour ajouter une nouvelle tâche à la liste
function addTodoItem(event) {
    event.preventDefault();
    const todoText = input.value;
    if (todoText) {
        const newTodoItem = {
            id: Date.now(),
            text: todoText,
            completed: false
        };
        todoList.push(newTodoItem);
        displayTodoItems();
        input.value = '';
    }
}

// Fonction pour supprimer une tâche de la liste
function deleteTodoItem(event) {
    const itemId = event.target.dataset.id;
    todoList = todoList.filter(item => item.id !== Number(itemId));
    displayTodoItems();
}

// Fonction pour cocher/décocher une tâche de la liste
function toggleTodoItem(event) {
    const itemId = event.target.dataset.id;
    todoList = todoList.map(item => {
        if (item.id === Number(itemId)) {
            return {
                ...item,
                completed: !item.completed
            };
        } else {
            return item;
        }
    });
    displayTodoItems();
}

// Fonction pour afficher toutes les tâches de la liste
function displayTodoItems() {
    // console.log(axios)

    list.innerHTML = '';
    todoList.forEach(item => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'mr-2';
        checkbox.dataset.id = item.id;
        checkbox.checked = item.completed;
        checkbox.addEventListener('click', toggleTodoItem);
        const label = document.createElement('label');
        label.textContent = item.text;
        if (item.completed) {
            label.classList.add('completed');
        }
        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger btn-sm float-right';
        deleteButton.textContent = 'Supprimer une tâche';
        deleteButton.dataset.id = item.id;
        deleteButton.addEventListener('click', deleteTodoItem);
        listItem.appendChild(checkbox);
        listItem.appendChild(label);
        listItem.appendChild(deleteButton);
        list.appendChild(listItem);
    });
}

// Ajout des événements aux éléments HTML pertinents
form.addEventListener('submit', addTodoItem);

// Appel de la fonction pour afficher les éléments initialement
displayTodoItems();
