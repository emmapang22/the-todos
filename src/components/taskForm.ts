import { Task } from "../models/Task";
import { createHtmlFinishedTask } from "../utils/createHtml/createHtmlFinishedTask";
import { createHtmlNewTask } from "../utils/createHtml/createHtmlNewTask";
import { sortAlphabetically } from "../utils/sortTasksUtils/sortTasksAlphabetically";
import { sortByDate } from "../utils/sortTasksUtils/sortTasksByDate";
import { sortByPriority } from "../utils/sortTasksUtils/sortTasksByPriority";
import { processFormDataInput } from "./processFormDataInput";

export const taskForm = () => {
  const tasksOG = [
    new Task("Laga middag", "2025-11-01", "Medium Priority"),
    new Task("Släng sopor", "2025-11-02", "High Priority"),
    new Task("Ladda eltandborsten", "2025-11-03", "Low Priority"),
  ];

  let tasks: Task[] = [];

  const tasksFromLs = localStorage.getItem("task");

  if (!tasksFromLs) {
    tasks = tasksOG;
  } else {
    tasks = JSON.parse(tasksFromLs);
  }

  let finishedTasks: Task[] = [];

  const finishedTasksFromLs = localStorage.getItem("finishedTask");

  if (finishedTasksFromLs) {
    finishedTasks = JSON.parse(finishedTasksFromLs);
  }

  document.getElementById("form")?.addEventListener("submit", (e) => {
    e.preventDefault();

    processFormDataInput(tasks, finishedTasks);
  });

  sortAlphabetically(tasks, finishedTasks);
  sortByDate(tasks, finishedTasks);
  sortByPriority(tasks, finishedTasks);

  createHtmlNewTask(tasks, finishedTasks);
  createHtmlFinishedTask(finishedTasks, tasks);
};
