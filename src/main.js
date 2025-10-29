import { Task } from "./models/Task";
import "./style.css";
import { createHtml } from "./utilities";

const tasksOG = [
  new Task("Laga middag", "2025-11-01", "Medium Priority"),
  new Task("Tvätta kläderna", "2025-11-02", "High Priority"),
  new Task("Ladda eltandborsten", "2025-11-03", "Low Priority"),
];

let tasks = [];

const tasksFromLs = localStorage.getItem("task");
if (tasksFromLs === null) {
  tasks = tasksOG;
} else {
  tasks = JSON.parse(tasksFromLs);
}

let finishedTasks = [];

const finishedTasksFromLs = localStorage.getItem("finishedTask");

finishedTasks = JSON.parse(finishedTasksFromLs);

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

  createHtml(tasks, finishedTasks);
}

const form = document.getElementById("form");

if (form) {
  form.addEventListener("submit", handleSubmit);
}

// funktion för att sortera uppgifternas prioritering från högst till lägst
function sortByPriority() {
  tasks.sort((a, b) => {
    const priorityA = a.priority.toUpperCase(); // ignore upper and lowercase
    const priorityB = b.priority.toUpperCase(); // ignore upper and lowercase
    if (priorityA < priorityB) {
      return -1;
    }
    if (priorityA > priorityB) {
      return 1;
    }

    return 0;
  });
  createHtml(tasks, finishedTasks);
}

const sortByPriorityBtn = document.getElementById("by-priority-btn");

sortByPriorityBtn.addEventListener("click", sortByPriority);

// funktion för att sortera uppgifternas datum från tidigast till senast
function sortByDate() {
  tasks.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));

  createHtml(tasks, finishedTasks);
}

const sortByDateBtn = document.getElementById("by-date-btn");

sortByDateBtn.addEventListener("click", sortByDate);

// funktion för att sortera uppgifternas titlar i alfabetisk ordning från A till Ö
function sortAlphabetically() {
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

  createHtml(tasks, finishedTasks);
}

const sortByAlphabetButton = document.getElementById("by-alphabet-btn");

sortByAlphabetButton.addEventListener("click", sortAlphabetically);

// funktion för att radera en to-do uppgift från listan
export function deleteFromTasks(i) {
  tasks.splice(i, 1);

  localStorage.setItem("task", JSON.stringify(tasks));

  createHtml(tasks, finishedTasks);
}

// funktion för att radera en avklarad uppgift från listan
export function deleteFromFinishedTasks(i) {
  finishedTasks.splice(i, 1);

  localStorage.setItem("task", JSON.stringify(finishedTasks));

  createHtml(tasks, finishedTasks);
}

// funktion för att flytta en uppgift till avklarade uppgifter
export function moveTaskToFinished(i) {
  const taskToMove = tasks[i];

  tasks.splice(i, 1);

  finishedTasks.push(taskToMove);

  localStorage.setItem("task", JSON.stringify(tasks));
  localStorage.setItem("finishedTask", JSON.stringify(finishedTasks));

  createHtml(tasks, finishedTasks);
}

// funktion för att flytta tillbaka en avklarad uppgift till to-do listan
export function moveTaskBackToDo(i) {
  const taskToMove = finishedTasks[i];

  finishedTasks.splice(i, 1);

  tasks.push(taskToMove);

  localStorage.setItem("task", JSON.stringify(tasks));
  localStorage.setItem("finishedTask", JSON.stringify(finishedTasks));

  createHtml(tasks, finishedTasks);
}

createHtml(tasks, finishedTasks);
