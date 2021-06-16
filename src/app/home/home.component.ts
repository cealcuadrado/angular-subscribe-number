import { NumberService } from './../services/number.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentNumber = 2;
  constructor(
    private numberService: NumberService
  ) { }

  ngOnInit(): void {
    this.numberService.getNumber().subscribe(number => {
      this.currentNumber = number;
    });
  }
}
