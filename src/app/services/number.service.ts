import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumberService {
  private subjectNum = new Subject<number>();

  constructor() { }

  public getNumber(): Observable<number> {
    return this.subjectNum.asObservable();
  }

  public setNumber(n: number): void {
    this.subjectNum.next(n);
  }

}
