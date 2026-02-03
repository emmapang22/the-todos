import { createHtmlFinishedTask } from "../../components/createHtmlFinishedTask";
import { createHtmlNewTask } from "../../components/createHtmlNewTask";
import { Task } from "../../models/Task";

// funktion för att flytta en uppgift till avklarade uppgifter
export function moveToFinishedTasks(
  tasks: Task[],
  finishedTasks: Task[],
  i: any,
) {
  const taskToMove = tasks[i];

  tasks.splice(i, 1);

  finishedTasks.push(taskToMove);

  localStorage.setItem("task", JSON.stringify(tasks));
  localStorage.setItem("finishedTask", JSON.stringify(finishedTasks));

  createHtmlNewTask(tasks, finishedTasks);
  createHtmlFinishedTask(finishedTasks, tasks);
}
