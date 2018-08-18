import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  leftHandNumber: string;
  rightHandNumber: string;
  areWeTypingTheFirstNumber: boolean;
  answer: string;

  constructor() {
    this.leftHandNumber = "";
    this.rightHandNumber = "";
    this.areWeTypingTheFirstNumber = true;
  }

  ngOnInit() {
  }


  appendNumber(selectedNumber: string) {
    if (this.areWeTypingTheFirstNumber === true) {
      this.leftHandNumber = this.leftHandNumber + selectedNumber;
    } else {
      this.rightHandNumber = this.rightHandNumber + selectedNumber;
    }

    // console.log(this.leftHandNumber);
  }

  clear(): void {
    this.leftHandNumber = "";
  }

  clearAll(): void {
    this.leftHandNumber = "";
    this.rightHandNumber = "";
    this.answer = "";

  }

  backspace(): void {
    this.leftHandNumber = this.leftHandNumber.slice(0, -1);
  }

  add() {
    this.areWeTypingTheFirstNumber = false;
  }

  subtract() {
  }

  enter() {
    let leftHandNumberValue: number = parseInt(this.leftHandNumber);
    let rightHandNumberValue: number = +this.rightHandNumber;
    let answer: number = leftHandNumberValue + rightHandNumberValue;
    this.answer = answer.toString();
    this.areWeTypingTheFirstNumber = true;
    this.leftHandNumber = "";
    this.rightHandNumber = "";
  }


}
