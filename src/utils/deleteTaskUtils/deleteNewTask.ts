import { Task } from "../../models/Task";
import { createHtmlFinishedTask } from "../createHtml/createHtmlFinishedTask";
import { createHtmlNewTask } from "../createHtml/createHtmlNewTask";

// funktion för att radera en to-do uppgift från listan
export const deleteNewTask = (tasks: Task[], finishedTasks: Task[], i: any) => {
  tasks.splice(i, 1);

  localStorage.setItem("task", JSON.stringify(tasks));

  createHtmlNewTask(tasks, finishedTasks);
  createHtmlFinishedTask(finishedTasks, tasks);
};
