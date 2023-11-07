document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    //  adding a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <input type="checkbox" class="complete-checkbox">
                <span>${taskText}</span>
                <button class="delete-button">Delete</button>
            `;

            taskList.appendChild(listItem);
            taskInput.value = "";

            // Adding a click event to delete a task
            const deleteButton = listItem.querySelector(".delete-button");
            deleteButton.addEventListener("click", function () {
                taskList.removeChild(listItem);
            });

            // Adding a click event to toggle task transparency
            const completeCheckbox = listItem.querySelector(".complete-checkbox");
            completeCheckbox.addEventListener("change", function () {
                listItem.classList.toggle("transparent", completeCheckbox.checked);
            });
        }
    }

    // when the "Add" button is clicked
    addTaskButton.addEventListener("click", addTask);

    // when Enter key is pressed in the input field
    taskInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
