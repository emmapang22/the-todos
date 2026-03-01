import { Task } from "../../models/Task";
import { createHtmlFinishedTask } from "../createHtml/createHtmlFinishedTask";
import { createHtmlNewTask } from "../createHtml/createHtmlNewTask";

// funktion för att flytta en uppgift till avklarade uppgifter
export const moveToFinishedTasks = (
  tasks: Task[],
  finishedTasks: Task[],
  i: any,
) => {
  const taskToMove = tasks[i];

  tasks.splice(i, 1);

  finishedTasks.push(taskToMove);

  localStorage.setItem("task", JSON.stringify(tasks));
  localStorage.setItem("finishedTask", JSON.stringify(finishedTasks));

  createHtmlNewTask(tasks, finishedTasks);
  createHtmlFinishedTask(finishedTasks, tasks);
};
