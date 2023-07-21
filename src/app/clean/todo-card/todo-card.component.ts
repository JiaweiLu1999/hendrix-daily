import {Component} from '@angular/core';
import {CleanService} from "../clean.service";

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css']
})
export class TodoCardComponent {
  constructor(public cleanService: CleanService) {
  }
}
