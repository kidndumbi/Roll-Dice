import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NotificationService {

  private subject = new Subject();
  notifications$ = this.subject.asObservable();

  constructor() { }

  emit(notification){
        this.subject.next(notification);
  }

}
