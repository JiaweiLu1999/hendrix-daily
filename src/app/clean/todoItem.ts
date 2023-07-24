export class TodoItem {
  title: string;
  requester: string;
  executor: string;
  startTime: string;
  endTime: string;
  completed: string;

  constructor(title: string, requester: string, startTime: string,
              executor: string, endTime: string, completed: string) {
    this.title = title;
    this.requester = requester;
    this.executor = executor;
    this.startTime = startTime;
    this.endTime = endTime;
    this.completed = completed;
  }

}
