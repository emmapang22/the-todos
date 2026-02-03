export class Task {
  title;
  deadline;
  priority;

  constructor(title: string, deadline: string, priority: string) {
    this.title = title;
    this.deadline = deadline;
    this.priority = priority;
  }
}
