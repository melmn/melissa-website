import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  input: string;
  answer: string;

  constructor() {
    this.input = "";
  }

  ngOnInit() {
  }

  appendValue(uiSelection: string) {
    this.input += uiSelection;
  }

  clear(): void {
    this.input = "";
  }

  clearAll(): void {
    this.clear();
    this.answer = "";
  }

  backspace(): void {
    this.input = this.input.slice(0, -1);
  }

  enter() {
    let tempAnswer: number = eval(this.input);
    this.answer = tempAnswer.toString();
    console.log("debugging");
  }

}
