import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  inputForDisplay: string;
  inputForActuallyDoingTheMath: string;
  answer: string;

  constructor() {
    this.inputForDisplay = "";
    this.inputForActuallyDoingTheMath = "";
  }

  ngOnInit() {
  }

  appendValue(uiSelection: string): void {
    this.inputForActuallyDoingTheMath += uiSelection;
    // this.inputForDisplay += this.replaceSlash(this.replaceAsterisk(uiSelection));
    this.inputForDisplay += this.replaceMathSymbols(uiSelection);
  }

  clear(): void {
    this.inputForDisplay = "";
    this.inputForActuallyDoingTheMath = "";
  }

  clearAll(): void {
    this.clear();
    this.answer = "";
  }

  backspace(): void {
    this.inputForActuallyDoingTheMath = this.inputForActuallyDoingTheMath.slice(0, -1);
    this.inputForDisplay = this.inputForDisplay.slice(0, -1);
  }

  enter(): void {
    let tempAnswer: number = eval(this.inputForActuallyDoingTheMath);
    this.answer = tempAnswer.toString();
  }

  replaceAsterisk(textWithAnAsterisk: string): string {
    // let textWithAsteriskReplaced: string;
    // textWithAsteriskReplaced = textWithAnAsterisk.replace("*", "x");
    // return textWithAsteriskReplaced;
    // the three lines above are equal to the line below for future reference
    return textWithAnAsterisk.replace("*", "x");
  }

  replaceSlash(textWithASlash: string): string {
    // let textWithSlashReplaced: string;
    // textWithSlashReplaced = textWithASlash.replace("/", "÷");
    // return textWithSlashReplaced;
    // the three lines above are equal to the line below for future reference
    return textWithASlash.replace("/", "÷");
  }

  replaceMathSymbols(inputText: string): string {
    return inputText.replace("/", "÷").replace("*", "x");
  }

}
