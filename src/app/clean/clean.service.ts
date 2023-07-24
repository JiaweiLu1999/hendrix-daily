import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import {TodoItem} from "./todoItem";
import {push, ref, set, get, child, update} from "firebase/database";
import {AuthService} from "../service/auth.service";
import {NgForm} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {formatDate} from "@angular/common";
import {UserService} from "../service/user.service";

@Injectable({
  providedIn: 'root'
})
export class CleanService {
  taskList: string[] = [];
  todoList: TodoItem[] = [];
  completedList: TodoItem[] = [];
  todoKeys: string[] = [];
  isShownAddTask: boolean = false;
  curTask: TodoItem = new TodoItem('', '', '', '', '', '');


  constructor(private authService: AuthService, private router: Router, private userService: UserService,
              private route: ActivatedRoute, @Inject(LOCALE_ID) public locale: string) {
    this.getTaskList();
    this.getTodoList();
    this.userService.getCurrentUser();
  }


  addTodoItem(title: string) {
    let item = new TodoItem(title, this.userService.user.username,
      formatDate(new Date(), 'yyyy MMM dd, hh:mm', this.locale),
      '', '', 'false');
    set(push(ref(this.authService.database, 'todoList/')), item);
    this.getTodoList();
    this.router.navigate(['/clean']);
  }

  getTodoList() {
    get(child(ref(this.authService.database), 'todoList/')).then((snapshot) => {
      let todoLst: TodoItem[] = [];
      let completedLst: TodoItem[] = [];
      let keys: string[] = [];
      if (snapshot.exists()) {
        let response = snapshot.val();
        for (let key in response) {
          if (response[key]['completed'] == 'false') {
            todoLst.push(response[key]);
            keys.push(key);
          } else {
            completedLst.push(response[key]);
          }
        }
        this.todoList = todoLst;
        this.todoKeys = keys;
        this.completedList = completedLst;
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

  getCurTask(idx: string) {
    get(child(ref(this.authService.database), 'todoList/' + idx)).then((snapshot) => {
      if (snapshot.exists()) {
        let response = snapshot.val();
        this.curTask = new TodoItem(
          response['title'],
          response['requester'],
          response['startTime'] ,
          response['executor'],
          response['endTime'],
          response['completed']
        )
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }

  onCompleteTask(form: NgForm, id: string) {
    let updateTask = new TodoItem(
      form.value['title'],
      form.value['requester'],
      form.value['startTime'],
      form.value['executor'],
      form.value['endTime'],
      'true',
    )
    update(ref(this.authService.database, 'todoList/' + id), updateTask);
    this.getTodoList();
    this.router.navigate(['/clean']);
  }
}
