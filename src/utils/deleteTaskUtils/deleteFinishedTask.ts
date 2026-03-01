import { Task } from "../../models/Task";
import { createHtmlFinishedTask } from "../createHtml/createHtmlFinishedTask";
import { createHtmlNewTask } from "../createHtml/createHtmlNewTask";

// funktion för att radera en avklarad uppgift från listan
export const deleteFinishedTask = (
  tasks: Task[],
  finishedTasks: Task[],
  i: any,
) => {
  finishedTasks.splice(i, 1);

  localStorage.setItem("finishedTask", JSON.stringify(finishedTasks));

  createHtmlNewTask(tasks, finishedTasks);
  createHtmlFinishedTask(finishedTasks, tasks);
};
