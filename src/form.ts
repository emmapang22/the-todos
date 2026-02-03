import { Task } from "./models/Task";
import { createHtmlFinishedTask } from "./components/createHtmlFinishedTask";
import { createHtmlNewTask } from "./components/createHtmlNewTask";

export function form(tasks: Task[], finishedTasks: Task[]) {
  const title = (document.getElementById("title") as HTMLInputElement).value;
  const deadline = (document.getElementById("deadline") as HTMLInputElement)
    .value;
  const priority = (
    document.getElementById("select-priority") as HTMLSelectElement
  ).value;

  (document.getElementById("title") as HTMLInputElement).value = "";
  (document.getElementById("deadline") as HTMLInputElement).value = "";

  if (title === "") {
    alert("Write something as the title");
    return false;
  }

  const newTask = new Task(title, deadline, priority);

  tasks.push(newTask);

  localStorage.setItem("task", JSON.stringify(tasks));

  createHtmlNewTask(tasks, finishedTasks);
  createHtmlFinishedTask(finishedTasks, tasks);
}
