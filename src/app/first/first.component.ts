import { Component, OnInit } from '@angular/core';
import { NumbersExchangeService } from "../services/service"

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

	inputNumber: number = 0
  constructor(private numbersService: NumbersExchangeService) { 
      this.numbersService.firstChanged
        .subscribe(
        (number)=>{
          this.inputNumber = number
        }
      )
  }

  ngOnInit() {

  }
  onAddNumber(number){
    this.numbersService.addSecondNumbers(number)
  }
  

}
