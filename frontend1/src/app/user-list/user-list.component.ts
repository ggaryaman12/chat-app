import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { User } from '../enum'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [
    { id: 1, name: 'Aryaman Gupta' },
    { id: 2, name: 'Bhuvinder Singh' },
    { id: 3, name: 'Anjali' },
    // Add more users as needed
  ];

  @Output() userSelected = new EventEmitter<User>();

  constructor() { }

  ngOnInit() {
    console.warn("inside userlist component");

  }
  onSelect(user: User) {
    this.userSelected.emit(user);
  }
}
