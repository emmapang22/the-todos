import { Task } from "../../models/Task";
import { createHtmlFinishedTask } from "../createHtml/createHtmlFinishedTask";
import { createHtmlNewTask } from "../createHtml/createHtmlNewTask";

// funktion för att sortera uppgifternas titlar i alfabetisk ordning från A till Ö
export const sortAlphabetically = (tasks: Task[], finishedTasks: Task[]) => {
  document.getElementById("by-alphabet-btn")?.addEventListener("click", () => {
    tasks.sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();

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
};
