import { Component, OnInit, Input } from '@angular/core';
import { Message, User } from '../enum'


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  @Input() selectedUser!: User;
  messages: Message[] = [
    { userId: 1, content: 'Hi there!', timestamp: new Date() },
    { userId: 1, content: 'How are you?', timestamp: new Date() },
    { userId: 2, content: 'Hello!', timestamp: new Date() },
    { userId: 3, content: 'Good evening!', timestamp: new Date() },
    // Add more messages as needed
  ];
  constructor() { }

  ngOnInit() {
    console.warn("inside message component");
    console.warn(this.selectedUser,"selecteduese")
  }

  getUserMessages(): Message[] {
    if (this.selectedUser && typeof this.selectedUser.id === 'number') {
      return this.messages.filter(message => message.userId === this.selectedUser!.id);
    } else {
      return [];  // Return an empty array if no user is selected
    }
  }

}
