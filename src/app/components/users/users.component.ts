import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/users-and-questions';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input()
  options!: Array<IUser>;
  @Input()
  count!: number;
  constructor() { }

  ngOnInit(): void {
  }

}
