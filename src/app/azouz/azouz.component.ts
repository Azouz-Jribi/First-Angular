import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from './user';
import { UserServiceService } from './user-service.service';
import { Client } from './client';
import {FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/Router';


@Component({
  selector: 'app-azouz',
  templateUrl: './azouz.component.html',
  styleUrls: ['./azouz.component.css'],
  providers: [UserServiceService]
})
export class AzouzComponent implements OnInit {

  title: string = 'azouz component';
  user: User = new User('Jribi Abdelaziz', 27);
  users: Client[];
  links: any[];

  /** create form validation */
  clientFormGroup = new FormGroup(
    {
      'name': new FormControl(
        this.user.name,
        this.nameValidator
      ),
      'age': new FormControl(
        this.user.age,
        [Validators.required, Validators.min(18)]
      )
    }
  );

  /** get paramfrom parent component */
  @Input()
  param: string;

  /** send param to parent component */
  @Output()
  azouzEvent = new EventEmitter();

  /** Constractor */
  constructor(private userService: UserServiceService, private router: Router) {}

  /** onClick button action */
  save(){
    this.user.setName('AJ');
    console.log('saved!');
  }

  /** submited function [Form validation] */
  formAction(clientForm: FormGroup)
  {
    let newUser = clientForm.value;
    this.user.name = newUser.name;
    this.user.age = newUser.age;
  }

  /** custom form field validator */
  nameValidator(c: FormControl)
  {
    if (c.value.length < 3) {
      return {
        'nameValidator' : true
      };
    }

    return null;
  }

  ngOnInit() {
    /** apply the user service */
    this.userService.getUsers().subscribe((clients) => {
      this.users = clients;
    });

    /** links Menu list */
    this.links = this.router.config;
    console.log("chargement de component azouz");
  }
}


