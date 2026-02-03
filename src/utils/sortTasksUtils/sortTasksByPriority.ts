import { createHtmlFinishedTask } from "../../components/createHtmlFinishedTask";
import { createHtmlNewTask } from "../../components/createHtmlNewTask";
import { Task } from "../../models/Task";

// funktion för att sortera uppgifternas prioritering från högst till lägst
export function sortByPriority(tasks: Task[], finishedTasks: Task[]) {
  document.getElementById("by-priority-btn")?.addEventListener("click", () => {
    tasks.sort((a, b) => {
      const priorityA = a.priority.toUpperCase();
      const priorityB = b.priority.toUpperCase();
      if (priorityA < priorityB) {
        return -1;
      }
      if (priorityA > priorityB) {
        return 1;
      }

      return 0;
    });
    createHtmlNewTask(tasks, finishedTasks);
    createHtmlFinishedTask(finishedTasks, tasks);
  });
}
