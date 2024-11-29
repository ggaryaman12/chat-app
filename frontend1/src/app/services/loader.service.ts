
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loader = new BehaviorSubject<boolean>(false);
  public loaderStatus = this.loader.asObservable();

  showLoader() {
    debugger
    this.loader.next(true);
  }

  hideLoader() {
    this.loader.next(false);
  }
}