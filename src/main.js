import { Task } from "./models/Task";
import "./style.css";
import { createHtml } from "./utilities";

const tasksOG = [
  new Task("Test", "2025-01-01", "Low Priority"),
  new Task("Test", "2025-01-01", "Low Priority"),
  new Task("Test", "2025-01-01", "Low Priority"),
];

let tasks = [];

const tasksFromLs = localStorage.getItem("task");
if (tasksFromLs === null) {
  tasks = tasksOG;
} else {
  tasks = JSON.parse(tasksFromLs);
}

function handleSubmit(e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const deadline = document.getElementById("deadline").value;
  const priority = document.getElementById("select-priority").value;

  document.getElementById("title").value = "";
  document.getElementById("deadline").value = "";

  const newTask = new Task(title, deadline, priority);

  tasks.push(newTask);

  localStorage.setItem("task", JSON.stringify(tasks));

  createHtml(tasks);
}

const form = document.getElementById("form");

if (form) {
  form.addEventListener("submit", handleSubmit);
}

createHtml(tasks);

function sortTasks() {
  tasks.sort((a, b) => {
    const titleA = a.title.toUpperCase(); // ignore upper and lowercase
    const titleB = b.title.toUpperCase(); // ignore upper and lowercase
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }

    return 0;
  });

  createHtml(tasks);
}

const sortTaskButton = document.getElementById("sort-btn");

sortTaskButton.addEventListener("click", sortTasks);
