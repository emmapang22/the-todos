import { createHtmlFinishedTask } from "../../components/createHtmlFinishedTask";
import { createHtmlNewTask } from "../../components/createHtmlNewTask";
import { Task } from "../../models/Task";

// funktion för att radera en avklarad uppgift från listan
export function deleteFinishedTask(
  tasks: Task[],
  finishedTasks: Task[],
  i: any,
) {
  finishedTasks.splice(i, 1);

  localStorage.setItem("finishedTask", JSON.stringify(finishedTasks));

  createHtmlNewTask(tasks, finishedTasks);
  createHtmlFinishedTask(finishedTasks, tasks);
}
