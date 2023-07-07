# Todo List

This is a simple JavaScript todo list application that allows you to add, edit, delete, and search todos. It uses the localStorage object to store todos locally in the browser.

## Features

- Add a new todo by entering text in the input field and clicking the "Add" button.
- Edit an existing todo by clicking the edit button (pencil icon) next to the todo. Update the todo text and click the "Update" button to save the changes.
- Mark a todo as completed by checking the checkbox next to the todo. Uncheck the checkbox to mark it as incomplete.
- Delete a todo by clicking the delete button (trash can icon) next to the todo.
- Search for todos by entering a search query in the search input field and clicking the "Search" button. The application will display the matching todos.

## Usage

To use the todo list application, follow these steps:

1. Open the `index.html` file in a web browser.
2. Enter a todo in the input field and click the "Add" button to add it to the list.
3. To edit a todo, click the edit button (pencil icon) next to the todo. Update the todo text in the input field and click the "Update" button.
4. To mark a todo as completed, check the checkbox next to the todo. Uncheck the checkbox to mark it as incomplete.
5. To delete a todo, click the delete button (trash can icon) next to the todo.
6. To search for todos, enter a search query in the search input field and click the "Search" button. The application will display the matching todos.

## Code Explanation

The JavaScript code provided implements the functionality of the todo list application. Here's a brief explanation of the key functions and variables:

- `todos`: An array that stores the todo objects retrieved from the localStorage. If there are no todos in the localStorage, it initializes an empty array.
- `editIndex`: A variable that keeps track of the index of the todo being edited. It is initially set to -1.
- `saveTodos()`: A function that saves the todos array to the localStorage.
- `renderTodos()`: A function that renders the todos in the todo list. It creates the necessary HTML elements for each todo and appends them to the todo list container.
- `addTodo()`: A function that adds a new todo to the todos array. It retrieves the todo text from the input field, creates a new todo object, and adds it to the array. If the editIndex is not -1, it updates the existing todo at that index instead of adding a new one.
- `toggleTodoCompleted(index)`: A function that toggles the completed status of a todo at the specified index in the todos array.
- `deleteTodo(index)`: A function that deletes a todo at the specified index from the todos array.
- `editTodo(index)`: A function that allows editing a todo at the specified index. It retrieves the todo text from the todos array and populates the input field with it. It also updates the editIndex and the visibility of the add and update buttons.
- `searchTodo()`: A function that performs a search for todos based on the search query entered in the search input field. It filters the todos array based on the todo text and renders the search results.
- `renderSearchResults(results)`: A function that renders the search results in the todo list container. It creates the necessary HTML elements for each search result and appends them to the container. If no search results are found, it displays a "NOT FOUND" message.

## Dependencies

The todo list application does not have any external dependencies. It is built using plain HTML, CSS, and JavaScript.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

Feel free to use and modify the code according to your needs. Contributions are welcome!

## Credits

This todo list application was created by [RomenR1]. You can find the original source code and more projects on [GitHub([https://github.com/RomenR1/todo-list]).

If you have any questions or suggestions, please feel free to reach out to me at [romenrakholiya34@gmail.com].
