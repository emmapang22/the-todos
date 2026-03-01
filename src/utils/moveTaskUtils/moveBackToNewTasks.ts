import { Task } from "../../models/Task";
import { createHtmlFinishedTask } from "../createHtml/createHtmlFinishedTask";
import { createHtmlNewTask } from "../createHtml/createHtmlNewTask";

// funktion för att flytta tillbaka en avklarad uppgift till to-do listan
export const moveBackToNewTasks = (
  tasks: Task[],
  finishedTasks: Task[],
  i: any,
) => {
  const taskToMove = finishedTasks[i];

  finishedTasks.splice(i, 1);

  tasks.push(taskToMove);

  localStorage.setItem("task", JSON.stringify(tasks));
  localStorage.setItem("finishedTask", JSON.stringify(finishedTasks));

  createHtmlNewTask(tasks, finishedTasks);
  createHtmlFinishedTask(finishedTasks, tasks);
};
