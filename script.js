
    let addToDoButton = document.getElementById("addToDo");
    let inputField = document.getElementById("inputfield");
    let toDoContainer = document.getElementById("toDoContainer");

    addToDoButton.addEventListener("click", function() {
        if (inputField.value.trim() !== "") {
            let task = document.createElement("p");
            task.innerText = inputField.value;
            task.classList.add("task");
            
            
            task.addEventListener("click", function() {
                task.classList.toggle("completed");
            });

            toDoContainer.appendChild(task);
            inputField.value = ""; 
        }
    });
</script>
