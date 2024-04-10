// Function to add a task
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value !== "") {
        var li = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", showAppreciationPopup);
        li.textContent = taskInput.value;
        li.appendChild(checkbox);
        taskList.appendChild(li);
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}

// Function to display appreciation popup
function showAppreciationPopup(event) {
    if (event.target.checked) {
        var appreciationQuotes = [
            "Great job!",
            "Well done!",
            "Fantastic work!",
            "You're amazing!"
        ];
        var randomIndex = Math.floor(Math.random() * appreciationQuotes.length);
        var appreciationQuote = appreciationQuotes[randomIndex];

        alert(appreciationQuote);

        // Mark the task as done by removing it from the list
        event.target.parentElement.remove();
    }
}

// Function to display remaining tasks reminder
function displayRemainingTasks() {
    var taskList = document.getElementById("taskList");
    var tasks = taskList.getElementsByTagName("li");
    var remainingTasks = tasks.length;
    
    alert("You have " + remainingTasks + " tasks remaining.");
}

// Call the displayRemainingTasks function every two hours
setInterval(displayRemainingTasks, 2 * 60 * 60 * 1000);