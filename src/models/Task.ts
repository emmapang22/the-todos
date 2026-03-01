export class Task {
  title: string;
  deadline: string;
  priority: string;

  constructor(title: string, deadline: string, priority: string) {
    this.title = title;
    this.deadline = deadline;
    this.priority = priority;
  }
}
