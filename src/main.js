import { Task } from "./models/Task";
import "./style.css";

let tasks = [];

const handleSubmit = (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const deadline = document.getElementById("deadline").value;
  const priority = document.getElementById("select-priority").value;

  const newTask = new Task(title, deadline, priority);

  tasks.push(newTask);

  localStorage.setItem("task", JSON.stringify(tasks));
};

const form = document.getElementById("form");

if (form) {
  form.addEventListener("submit", handleSubmit);
}
