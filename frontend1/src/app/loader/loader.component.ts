import { Component, OnInit } from '@angular/core';
import { User } from '../enum'
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-chats',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  constructor(private loaderService: LoaderService) { }
  showLoader = false;
  ngOnInit() {
    this.loaderService.loaderStatus.subscribe((status: boolean) => {
      this.showLoader = status;
    });
  }
}
