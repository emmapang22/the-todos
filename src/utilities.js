export const createHtml = (tasks) => {
  // Hitta den <section> som har id:t cars.
  const sectionToDo = document.getElementById("to-do-container");
  sectionToDo.classList.add("flex", "flex-col", "gap-2");

  // Töm <section> på innehåll (den gamla listan)
  sectionToDo.innerHTML = "";

  // Loopa igenom den nya listan
  tasks.forEach((task) => {
    // Skapa element
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    const info = document.createElement("div");
    const title = document.createElement("h3");
    const details = document.createElement("div");
    const deadline = document.createElement("p");
    const priority = document.createElement("p");

    // Fyll på med information i elementen
    li.classList.add(
      "task",
      "flex",
      "flex-row",
      "bg-gray-400",
      "py-2",
      "px-4",
      "gap-4",
      "rounded-md"
    );
    checkbox.type = "checkbox";
    checkbox.name = "checkbox";
    checkbox.className = "checkbox";
    checkbox.addEventListener("click", () => {
      tasks.splice(task, 1);
      createHtml(tasks);
    });

    info.classList.add(
      "flex",
      "flex-col",
      "justify-between",
      "w-full",
      "text-black"
    );
    title.innerHTML = task.title;
    title.classList.add("text-lg", "font-bold");
    details.classList.add(
      "flex",
      "flex-row",
      "gap-4",
      "justify-between",
      "items-center"
    );
    deadline.innerHTML = "Deadline: " + task.deadline;
    priority.innerHTML = task.priority;

    if (task.priority === "High Priority") {
      priority.classList.add("bg-red-700", "text-white");
    } else if (task.priority === "Medium Priority") {
      priority.classList.add("bg-yellow-500", "text-black");
    } else {
      priority.classList.add("bg-sky-600", "text-white");
    }

    priority.classList.add(
      "py-1",
      "px-4",
      "rounded-full",
      "text-center",
      "text-sm"
    );

    // Lägg till elementen
    sectionToDo.appendChild(li);
    li.appendChild(checkbox);
    li.appendChild(info);
    info.appendChild(title);
    info.appendChild(details);
    details.appendChild(deadline);
    details.appendChild(priority);
  });
};
