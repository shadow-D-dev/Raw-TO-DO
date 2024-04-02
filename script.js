document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");
    var input = document.getElementById("taskInput");
    console.log(input); // Check if input is null
    var taskList = document.getElementById("taskList");

    input.addEventListener("keypress", function(event) {
        console.log("Key pressed");
        if (event.key === "Enter") {
            var taskText = input.value.trim();
            console.log("Task text:", taskText);
            if (taskText !== "") {
                var newTask = document.createElement("li");
                newTask.textContent = taskText;
                newTask.classList.add("tasks");
                taskList.appendChild(newTask);
                input.value = ""; // Clear the input field after adding the task
            }
        }
    });
});