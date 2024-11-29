import { Component, OnInit } from '@angular/core';
import { User } from '../enum';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {
  selectedUser: User | null = null; 
  constructor(private loaderService: LoaderService) { }

  ngOnInit() {
  }
  onUserSelected(user: User) {
    this.loaderService.showLoader();
    this.selectedUser = user;
  }
}
