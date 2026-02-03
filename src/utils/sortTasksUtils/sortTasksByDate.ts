import { createHtmlFinishedTask } from "../../components/createHtmlFinishedTask";
import { createHtmlNewTask } from "../../components/createHtmlNewTask";
import { Task } from "../../models/Task";

// funktion för att sortera uppgifternas datum från tidigast till senast
export function sortByDate(tasks: Task[], finishedTasks: Task[]) {
  document.getElementById("by-date-btn")?.addEventListener("click", () => {
    tasks.sort(
      (a, b) => new Date(a.deadline).valueOf() - new Date(b.deadline).valueOf(),
    );

    createHtmlNewTask(tasks, finishedTasks);
    createHtmlFinishedTask(finishedTasks, tasks);
  });
}
