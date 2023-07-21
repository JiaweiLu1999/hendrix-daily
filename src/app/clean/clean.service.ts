import { Injectable } from '@angular/core';
import {TodoItem} from "./todoItem";
import {push, ref, set, get, child} from "firebase/database";
import {AuthService} from "../service/auth.service";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class CleanService {
  taskList: string[] = [];
  todoList: TodoItem[] = [];
  isShownAddTask: boolean = false;


  constructor(private authService: AuthService, private router: Router) {
    this.getTaskList();
    this.getTodoList();
  }


  addTodoItem(title: string) {
    let item = new TodoItem(title, 'javey', new Date().toDateString(), '', '');
    set(push(ref(this.authService.database, 'todoList/')), item);
    this.getTodoList();
    this.router.navigate(['/clean']);
  }

  getTodoList() {
    get(child(ref(this.authService.database), 'todoList/')).then((snapshot) => {
      let temp: TodoItem[] = [];
      if (snapshot.exists()) {
        let response = snapshot.val();
        for (let key in response) {
          temp.push(response[key]);
        }
        this.todoList = temp;
        console.log(this.todoList);
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }

  onAddTodoItem(form: NgForm) {

  }

  addTask(title: string) {
    set(push(ref(this.authService.database, 'task/')), title);
    this.getTaskList();
    this.isShownAddTask = false;
    console.log(this.isShownAddTask);
  }

  getTaskList() {
    get(child(ref(this.authService.database), 'task/')).then((snapshot) => {
      let temp: string[] = [];
      if (snapshot.exists()) {
        let response = snapshot.val();
        for (let key in response) {
         temp.push(response[key]);
        }
        this.taskList = temp;
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }

  showAddTaskButton() {
    this.isShownAddTask = true;
  }
}
