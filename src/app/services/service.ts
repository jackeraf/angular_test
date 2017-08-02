import {Injectable, Output, EventEmitter} from "@angular/core"
import "rxjs/Rx"
//The rxjs above are observables, they allow us to transform data that comes back from the server
//is to unlock the operators like the map below
import {Observable} from "rxjs"

@Injectable()
export class NumbersExchangeService{

	inputFirstNumber: number = 0
	inputSecondNumber: number = 0
	firstChanged = new EventEmitter<number>()
	secondChanged = new EventEmitter<number>()

	addFirstNumbers(number: number){
		this.inputFirstNumber +=number
		this.firstChanged.emit(this.inputFirstNumber)
	}
	addSecondNumbers(number: number){
		this.inputSecondNumber += number
		this.secondChanged.emit(this.inputSecondNumber)
	}

	
}