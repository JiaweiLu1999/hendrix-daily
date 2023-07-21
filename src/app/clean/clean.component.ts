import { Component } from '@angular/core';
import {TodoItem} from "./todoItem";
import {CleanService} from "./clean.service";


@Component({
  selector: 'app-clean',
  templateUrl: './clean.component.html',
  styleUrls: ['./clean.component.css']
})
export class CleanComponent {
  constructor(public cleanService: CleanService) {

  }

}
