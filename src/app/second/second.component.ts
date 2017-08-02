import { Component, OnInit } from '@angular/core';
import { NumbersExchangeService } from "../services/service"


@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

	inputNumber: number = 0
  constructor(private numbersService: NumbersExchangeService) { }

  ngOnInit() {
      this.numbersService.secondChanged
        .subscribe(
        (number: number)=>{
          this.inputNumber = number
        }
      )
  }

  onAddNumber(number){
  	this.numbersService.addFirstNumbers(number)
  }

  

}
