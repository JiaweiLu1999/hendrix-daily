import {Component, Inject, LOCALE_ID} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CleanService} from "../clean.service";
import {UserService} from "../../service/user.service";
import {formatDate} from "@angular/common";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-complete-card',
  templateUrl: './complete-card.component.html',
  styleUrls: ['./complete-card.component.css']
})
export class CompleteCardComponent{
  constructor(public cleanService: CleanService, private route: ActivatedRoute,
              public userService: UserService, @Inject(LOCALE_ID) public locale: string) {
    this.cleanService.getCurTask(this.route.snapshot.params['id']);
    this.userService.getCurrentUser();
  }

  getCurTime() {
    return formatDate(new Date(), 'yyyy MMM dd, hh:mm', this.locale);
  }

  onSubmitTask(form: NgForm) {
    this.cleanService.onCompleteTask(form, this.route.snapshot.params['id']);
  }


}
