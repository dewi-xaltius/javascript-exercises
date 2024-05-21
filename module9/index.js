// Get references to the input field and the button
const newTaskInput = document.getElementById('new-task-input');
const addTaskButton = document.getElementById('add-task-button');

// Event listener for the add task button
addTaskButton.addEventListener('click', function() {
    // Get the value of the input field
    const taskText = newTaskInput.value;

    // Check if the input field is not empty
    if (taskText !== '') {
        // Create a new div element to hold the task
        const task = document.createElement('div');
        task.textContent = taskText;
        task.className = 'task';

        // Add event listener for marking the task as completed
        task.addEventListener('click', function() {
            task.classList.toggle('completed');
        });

        // Append the new task to the task list
        document.getElementById('task-list').appendChild(task);

        // Clear the input field
        newTaskInput.value = '';
    }
});
