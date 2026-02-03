import { createHtmlFinishedTask } from "../../components/createHtmlFinishedTask";
import { createHtmlNewTask } from "../../components/createHtmlNewTask";
import { Task } from "../../models/Task";

// funktion för att radera en to-do uppgift från listan
export function deleteNewTask(tasks: Task[], finishedTasks: Task[], i: any) {
  tasks.splice(i, 1);

  localStorage.setItem("task", JSON.stringify(tasks));

  createHtmlNewTask(tasks, finishedTasks);
  createHtmlFinishedTask(finishedTasks, tasks);
}
