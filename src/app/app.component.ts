import { NumberService } from './services/number.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'subscribe-number';

  constructor(
    private numberService: NumberService
  ) { }

  sendNumber(n: number): void {
    this.numberService.setNumber(n);
  }
}
