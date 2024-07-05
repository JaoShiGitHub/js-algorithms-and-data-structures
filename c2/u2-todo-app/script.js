const taskForm = document.getElementById("task-form");
const confirmCloseDialog = document.getElementById("confirm-close-dialog");
const openTaskFormBtn = document.getElementById("open-task-form-btn");
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
const cancelBtn = document.getElementById("cancel-btn");
const discardBtn = document.getElementById("discard-btn");
const tasksContainer = document.getElementById("tasks-container");
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");

// store all the tasks along with their associated data, including title, due date, and description
const taskData = [];
//  used to track the state when editing and discarding tasks
let currentTask = {}

const addOrUpdateTask = () => {
   const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);

   const taskObj = {
    id: `${titleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
    title: titleInput.value,
    date: dateInput.value,
    description: descriptionInput.value,
  };

   if (dataArrIndex === -1) {
    taskData.unshift(taskObj);
  }
  updateTaskContainer();
  reset();
}

const updateTaskContainer = () => {
  tasksContainer.innerHTML = "";
  
    taskData.forEach(
    ({ id, title, date, description }) => {
        (tasksContainer.innerHTML += `
        <div class="task" id="${id}">
          <p><strong>Title:</strong> ${title}</p>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Description:</strong> ${description}</p>
          <button type="button" class="btn">Edit</button>
          <button type="button" class="btn">Delete</button>
        </div>
      `)
    }
  );
}

const reset = () => {
  titleInput.value = "";
  dateInput.value = "";
  descriptionInput.value = "";

  taskForm.classList.toggle("hidden");
  currentTask = {}
}

openTaskFormBtn.addEventListener("click", () => {
  taskForm.classList.toggle("hidden");
})

closeTaskFormBtn.addEventListener("click", () => {
    const formInputsContainValues = titleInput.value || dateInput.value || descriptionInput.value;
   if (formInputsContainValues) {
    confirmCloseDialog.showModal();
  } else {
    reset()
  }
})

cancelBtn.addEventListener("click", () => {
  confirmCloseDialog.close()
});

discardBtn.addEventListener("click", () => {
  confirmCloseDialog.close()
  // taskForm.classList.toggle("hidden")
  reset()
  // reset() -> when you the Discard button is clicked, everything in the input fields should go away.
})

// get the values from the input fields, save them into the taskData array, and display them on the page
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  addOrUpdateTask();
});
  // reset() -> Clear the input fields and also hide the form modal for the user to see the added task
