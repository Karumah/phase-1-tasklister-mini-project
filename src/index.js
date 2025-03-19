document.addEventListener("DOMContentLoaded", function() {
  
  const form = document.getElementById("create-task-form");
  const taskInput = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks");

  // Add event listener for form submission
  form.addEventListener("submit", function(event) {
    // Prevent reload
    event.preventDefault();

    // Get the task description from the input
    const taskDescription = taskInput.value.trim();

    // Only proceed if the input is not empty
    if (taskDescription) {
      // Create a new list item 
      const taskItem = document.createElement("li");
      taskItem.textContent = taskDescription;

      // Create a delete button
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.style.marginLeft = "10px";
      deleteButton.addEventListener("click", function() {
        taskList.removeChild(taskItem);
      });

      // Append the delete button to the list item
      taskItem.appendChild(deleteButton);

      // Append the new task to the list item
      taskList.appendChild(taskItem);

      // Clear the input field
      taskInput.value = "";
    }
  });
});
