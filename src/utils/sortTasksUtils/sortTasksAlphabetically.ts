import { createHtmlFinishedTask } from "../../components/createHtmlFinishedTask";
import { createHtmlNewTask } from "../../components/createHtmlNewTask";
import { Task } from "../../models/Task";

// funktion för att sortera uppgifternas titlar i alfabetisk ordning från A till Ö
export function sortAlphabetically(tasks: Task[], finishedTasks: Task[]) {
  document.getElementById("by-alphabet-btn")?.addEventListener("click", () => {
    tasks.sort((a, b) => {
      const titleA = a.title.toUpperCase(); // ignore upper and lowercase
      const titleB = b.title.toUpperCase(); // ignore upper and lowercase
      if (titleA < titleB) {
        return -1;
      }
      if (titleA > titleB) {
        return 1;
      }

      return 0;
    });

    createHtmlNewTask(tasks, finishedTasks);
    createHtmlFinishedTask(finishedTasks, tasks);
  });
}
