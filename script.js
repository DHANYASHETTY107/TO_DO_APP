


function addTask() {
    const addButton = document.getElementById('add-task-btn'); // Get the Add Task button
    const inputField = document.getElementById('new-task-input'); // Get the input field
    const taskList = document.getElementById('task-list'); // Get the task list container

    // Function to add a task to the list
    addButton.onclick = function() {
        const taskText = inputField.value.trim(); // Get the task text from the input field
        if (taskText) { // If there is text in the input field
            const newTask = document.createElement('li'); // Create a new list item

            // Create a span for the task text
            const taskSpan = document.createElement('span');
            taskSpan.textContent = taskText;

            // Create the Remove button (for display)
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove'; // Button text is "Remove"

            // Add the task text and the Remove button to the task item
            newTask.appendChild(taskSpan);
            newTask.appendChild(removeBtn);

            // Add the task to the task list
            taskList.appendChild(newTask);

            // Clear the input field after adding the task
            inputField.value = '';
        }
    };

    // Add task when Enter key is pressed
    inputField.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
}


addTask();
