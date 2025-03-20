document.addEventListener("DOMContentLoaded", () => {
  // Select form and input elements
  const form = document.getElementById("create-task-form");
  const taskInput = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks"); // Ensure this exists in HTML

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission from refreshing the page

    const taskDescription = taskInput.value.trim();
    if (taskDescription === "") return; // Ignore empty tasks

    // Create new task element
    const li = document.createElement("li");
    li.textContent = taskDescription;

    // Append task to task list
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";
  });
});
