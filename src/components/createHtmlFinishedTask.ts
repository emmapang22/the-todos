import { Task } from "../models/Task";
import { deleteFinishedTask } from "../utils/deleteTaskUtils/deleteFinishedTask";
import { moveBackToNewTasks } from "../utils/moveTaskUtils/moveBackToNewTasks";

export function createHtmlFinishedTask(finishedTasks: Task[], tasks: Task[]) {
  // Hitta den <section> som har id:t finished-tasks-container.
  const sectionFinishedTasks = document.getElementById(
    "finished-tasks-container",
  ) as HTMLElement;

  sectionFinishedTasks.classList.add("flex", "flex-col", "gap-2");

  // Töm <section> på innehåll (den gamla listan)
  sectionFinishedTasks.innerHTML = "";

  // Loopa igenom den nya listan
  finishedTasks.forEach((finishedTask, i) => {
    // Skapa element
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    const info = document.createElement("div");
    const topRow = document.createElement("div");
    const title = document.createElement("h3");
    const trashcan = document.createElement("button");
    const details = document.createElement("div");
    const deadline = document.createElement("p");
    const priority = document.createElement("p");

    // Fyll på med information i elementen
    li.classList.add(
      "task",
      "flex",
      "flex-row",
      "bg-zinc-700",
      "py-3",
      "px-4",
      "gap-4",
      "rounded-md",
    );
    checkbox.type = "checkbox";
    checkbox.name = "checkbox";
    checkbox.className = "checkbox";
    checkbox.checked = true;
    checkbox.addEventListener("click", () => {
      if (!checkbox.checked) {
        moveBackToNewTasks(tasks, finishedTasks, i);
      }
    });

    info.classList.add(
      "flex",
      "flex-col",
      "justify-between",
      "w-full",
      "text-zinc-300",
      "gap-2",
    );

    topRow.classList.add(
      "flex",
      "flex-row",
      "justify-between",
      "items-center",
      "w-full",
    );

    title.innerHTML = finishedTask.title;

    title.classList.add("text-lg", "font-bold", "line-through");

    trashcan.classList.add(
      "fa-solid",
      "fa-trash-can",
      "text-lg",
      "cursor-pointer",
      "hover:text-red-500",
    );

    trashcan.addEventListener("click", () => {
      if (trashcan) {
        deleteFinishedTask(tasks, finishedTasks, i);
      }
    });

    details.classList.add(
      "flex",
      "flex-col",
      "gap-1",
      "justify-start",
      "items-start",
      "lg:flex-row",
      "lg:gap-4",
      "lg:justify-between",
      "lg:items-center",
    );

    deadline.innerHTML = "Deadline: " + finishedTask.deadline;

    if (finishedTask.deadline === "") {
      deadline.innerHTML = "Deadline: None";
    }

    priority.innerHTML = finishedTask.priority;
    priority.classList.add(
      "bg-zinc-800",
      "py-1",
      "px-4",
      "rounded-full",
      "text-center",
      "text-sm",
    );

    // Lägg till elementen
    sectionFinishedTasks?.appendChild(li);
    li.appendChild(checkbox);
    li.appendChild(info);
    info.appendChild(topRow);
    topRow.appendChild(title);
    topRow.appendChild(trashcan);
    info.appendChild(details);
    details.appendChild(deadline);
    details.appendChild(priority);
  });
}
