let todos = JSON.parse(localStorage.getItem("todos")) || [];
let editIndex = -1;
const todoForm = document.querySelector(".input-section");
const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector(".todo-list");
const addButton = document.querySelector("#addBtn");
const updateButton = document.getElementById("update-button");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const todo_main = document.querySelector(".todos");

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.className = "li";

    const checkbox = document.createElement("input");
    checkbox.className = "form-check-input";
    checkbox.type = "checkbox";
    checkbox.value = "option1";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", () => toggleTodoCompleted(index));

    const label = document.createElement("label");
    label.className = "form-check-label";

    const spanText = document.createElement("span");
    spanText.className = "todo-text";
    spanText.textContent = `${todo.text} (${todo.date})`;

    const deleteButton = document.createElement("span");
    deleteButton.className = "span-button";
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteButton.addEventListener("click", () => deleteTodo(index));

    const editButton = document.createElement("span");
    editButton.className = "span-button";
    editButton.innerHTML = '<i class="fa-solid fa-pen"></i>';
    editButton.addEventListener("click", () => editTodo(index));

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(spanText);
    li.appendChild(deleteButton);
    li.appendChild(editButton);

    todoList.appendChild(li);
  });
}
function addTodo() {
  const todoText = todoInput.value.trim();

  if (todoText !== "") {
    const currentDate = new Date();

    if (editIndex === -1) {
      todos.push({
        text: todoText,
        completed: false,
        date: currentDate.toLocaleString(),
      });
    } else {
      todos[editIndex].text = todoText;
      todos[editIndex].date = currentDate.toLocaleString();
      editIndex = -1;
      addButton.style.display = "inline";
      updateButton.style.display = "none";
    }

    saveTodos();
    renderTodos();
    todoInput.value = "";
  }

  return false;
}

function toggleTodoCompleted(index) {
  todos[index].completed = !todos[index].completed;
  saveTodos();
  renderTodos();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  saveTodos();
  renderTodos();
}

function editTodo(index) {
  const todoText = todos[index].text;
  todoInput.value = todoText;
  editIndex = index;
  addButton.style.display = "none";
  updateButton.style.display = "inline";
}

function searchTodo() {
  const searchQuery = searchInput.value.trim();
  if (searchQuery !== "") {
    const searchResults = todos.filter((todo) =>
      todo.text.toLowerCase().includes(searchQuery.toLowerCase())
    );
    renderSearchResults(searchResults);
  } else {
    renderTodos();
  }
}

function renderSearchResults(results) {
  todoList.innerHTML = "";

  if (results.length > 0) {
    results.forEach((todo, index) => {
      const li = document.createElement("li");
      li.className = "li";

      const checkbox = document.createElement("input");
      checkbox.className = "form-check-input";
      checkbox.type = "checkbox";
      checkbox.value = "option1";
      checkbox.checked = todo.completed;
      checkbox.addEventListener("change", () => toggleTodoCompleted(index));

      const label = document.createElement("label");
      label.className = "form-check-label";

      const spanText = document.createElement("span");
      spanText.className = "todo-text";
      spanText.textContent = `${todo.text} (${todo.date})`;

      const deleteButton = document.createElement("span");
      deleteButton.className = "span-button";
      deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
      deleteButton.addEventListener("click", () => deleteTodo(index));

      const editButton = document.createElement("span");
      editButton.className = "span-button";
      editButton.innerHTML = '<i class="fa-solid fa-pen"></i>';
      editButton.addEventListener("click", () => editTodo(index));

      li.appendChild(checkbox);
      li.appendChild(label);
      li.appendChild(spanText);
      li.appendChild(deleteButton);
      li.appendChild(editButton);

      todoList.appendChild(li);
    });
  } else {
    todo_main.innerHTML = `<img class="face" src="asetes/thinking.png" alt="">
                            <h1 class="not-found"> NOT FOUND</h1>`;
  }
}

todoForm.addEventListener("submit", addTodo);
updateButton.addEventListener("click", addTodo);
searchButton.addEventListener("click", searchTodo);
renderTodos();

// Sure! Here are the comments added to the code:

// javascript
// let todos = JSON.parse(localStorage.getItem("todos")) || []; // Initialize todos from localStorage or an empty array if no todos exist
// let editIndex = -1; // Initialize editIndex to -1, indicating no edit is in progress
// const todoForm = document.querySelector(".input-section"); // Get the todo form element
// const todoInput = document.querySelector("#todoInput"); // Get the todo input element
// const todoList = document.querySelector(".todo-list"); // Get the todo list element
// const addButton = document.querySelector("#addBtn"); // Get the add button element
// const updateButton = document.getElementById("update-button"); // Get the update button element
// const searchInput = document.getElementById("search-input"); // Get the search input element
// const searchButton = document.getElementById("search-button"); // Get the search button element
// const todo_main = document.querySelector(".todos"); // Get the main todo section element

// function saveTodos() {
//   // Function to save todos to localStorage
//   localStorage.setItem("todos", JSON.stringify(todos));
// }

// function renderTodos() {
//   // Function to render todos on the page
//   todoList.innerHTML = "";

//   todos.forEach((todo, index) => {
//     // Loop through todos and create DOM elements for each todo
//     const li = document.createElement("li"); // Create a new list item element
//     li.className = "li";

//     const checkbox = document.createElement("input"); // Create a new checkbox input element
//     checkbox.className = "form-check-input";
//     checkbox.type = "checkbox";
//     checkbox.value = "option1";
//     checkbox.checked = todo.completed; // Set the checked state based on todo's completed property
//     checkbox.addEventListener("change", () => toggleTodoCompleted(index)); // Add an event listener to toggle todo's completed state

//     const label = document.createElement("label"); // Create a new label element
//     label.className = "form-check-label";

//     const spanText = document.createElement("span"); // Create a new span element for todo text
//     spanText.className = "todo-text";
//     spanText.textContent = `${todo.text} (${todo.date})`; // Set the text content of the span element

//     const deleteButton = document.createElement("span"); // Create a new span element for delete button
//     deleteButton.className = "span-button";
//     deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>'; // Add HTML for delete button icon
//     deleteButton.addEventListener("click", () => deleteTodo(index)); // Add an event listener to delete the todo

//     const editButton = document.createElement("span"); // Create a new span element for edit button
//     editButton.className = "span-button";
//     editButton.innerHTML = '<i class="fa-solid fa-pen"></i>'; // Add HTML for edit button icon
//     editButton.addEventListener("click", () => editTodo(index)); // Add an event listener to edit the todo

//     li.appendChild(checkbox);
//     li.appendChild(label);
//     li.appendChild(spanText);
//     li.appendChild(deleteButton);
//     li.appendChild(editButton);

//     todoList.appendChild(li);
//   });
// }

// function addTodo() {
//   // Function to add a new todo
//   const todoText = todoInput.value.trim(); // Get the trimmed value of the todo input

//   if (todoText !== "") {
//     // Check if the input is not empty
//     const currentDate = new Date(); // Get the current date

//     if (editIndex === -1) {
//       // Check if not in edit mode
//       todos.push({
//         // Add a new todo object to the todos array
//         text: todoText,
//         completed: false,
//         date: currentDate.toLocaleString(),
//       });
//     } else {
//       todos[editIndex].text = todoText; // Update the text of the todo being edited
//       todos[editIndex].date = currentDate.toLocaleString(); // Update the date of the todo being edited
//       editIndex = -1; // Set editIndex back to -1 to indicate no edit is in progress
//       addButton.style.display = "inline"; // Show the add button
//       updateButton.style.display = "none"; // Hide the update button
//     }

//     saveTodos(); // Save the todos to localStorage
//     renderTodos(); // Render the updated todos on the page
//     todoInput.value = ""; // Clear the todo input
//   }

//   return false; // Prevent default form submission
// }

// function toggleTodoCompleted(index) {
//   // Function to toggle the completed state of a todo
//   todos[index].completed = !todos[index].completed; // Toggle the completed state
//   saveTodos(); // Save the todos to localStorage
//   renderTodos(); // Render the updated todos on the page
// }

// function deleteTodo(index) {
//   // Function to delete a todo
//   todos.splice(index, 1); // Remove the todo at the specified index from the array
//   saveTodos(); // Save the todos to localStorage
//   renderTodos(); // Render the updated todos on the page
// }

// function editTodo(index) {
//   // Function to edit a todo
//   const todoText = todos[index].text; // Get the text of the todo being edited
//   todoInput.value = todoText; // Set the todo input value to the todo text
//   editIndex = index; // Set editIndex to the index of the todo being edited
//   addButton.style.display = "none"; // Hide the add button
//   updateButton.style.display = "inline"; // Show the update button
// }

// function searchTodo() {
//   // Function to search for todos
//   const searchQuery = searchInput.value.trim(); // Get the trimmed value of the search input

//   if (searchQuery !== "") {
//     // Check if the search query is not empty
//     const searchResults = todos.filter((todo) =>
//       todo.text.toLowerCase().includes(searchQuery.toLowerCase())
//     ); // Filter todos based on the search query
//     renderSearchResults(searchResults); // Render the search results on the page
//   } else {
//     renderTodos(); // Render all todos on the page
//   }
// }

// function renderSearchResults(results) {
//   // Function to render search results
//   todoList.innerHTML = "";

//   if (results.length > 0) {
//     // Check if there are any search results
//     results.forEach((todo, index) => {
//       // Loop through search results and create DOM elements for each todo
//       const li = document.createElement("li"); // Create a new list item element
//       li.className = "li";

//       const checkbox = document.createElement("input"); // Create a new checkbox input element
//       checkbox.className = "form-check-input";
//       checkbox.type = "checkbox";
//       checkbox.value = "option1";
//       checkbox.checked = todo.completed; // Set the checked state based on todo's completed property
//       checkbox.addEventListener("change", () => toggleTodoCompleted(index)); // Add an event listener to toggle todo's completed state

//       const label = document.createElement("label"); // Create a new label element
//       label.className = "form-check-label";

//       const spanText = document.createElement("span"); // Create a new span element for todo text
//       spanText.className = "todo-text";
//       spanText.textContent = `${todo.text} (${todo.date})`; // Set the text content of the span element

//       const deleteButton = document.createElement("span"); // Create a new span element for delete button
//       deleteButton.className = "span-button";
//       deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>'; // Add HTML for delete button icon
//       deleteButton.addEventListener("click", () => deleteTodo(index)); // Add an event listener to delete the todo

//       const editButton = document.createElement("span"); // Create a new span element for edit button
//       editButton.className = "span-button";
//       editButton.innerHTML = '<i class="fa-solid fa-pen"></i>'; // Add HTML for edit button icon
//       editButton.addEventListener("click", () => editTodo(index)); // Add an event listener to edit the todo

//       li.appendChild(checkbox);
//       li.appendChild(label);
//       li.appendChild(spanText);
//       li.appendChild(deleteButton);
//       li.appendChild(editButton);

//       todoList.appendChild(li);
//     });
//   } else {
//     todo_main.innerHTML = `<img class="face" src="assets/thinking.png" alt="">
//                             <h1 class="not-found"> NOT FOUND</h1>`; // Display a message when no search results are found
//   }
// }

// todoForm.addEventListener("submit", addTodo); // Add event listener to the todo form to handle form submission
// updateButton.addEventListener("click", addTodo); // Add event listener to the update button to handle todo update
// searchButton.addEventListener("click", searchTodo); // Add event listener to the search button to perform search
// renderTodos(); // Initial rendering of todos on the page

// // I hope this helps! Let me know if you have any further questions.
