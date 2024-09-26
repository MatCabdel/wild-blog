import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-calculatrice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calculatrice.component.html',
  styleUrl: './calculatrice.component.scss',
})
export class CalculatriceComponent {
  firstNumber: number | null = null;
  secondNumber: number | null = null;
  operator: string | null = null;
  result: number | null = null;

  giveFirstNumber() {
    this.firstNumber = Math.floor(Math.random() * 101);
  }

  giveSecondNumber() {
    this.secondNumber = Math.floor(Math.random() * 101);
  }

  chooseOperator(op: string) {
    this.operator = op;
  }

  calculateResult() {
    if (this.firstNumber !== null && this.secondNumber !== null && this.operator !== null) {
      switch (this.operator) {
        case '+':
          this.result = this.firstNumber + this.secondNumber;
          break;
        case '-':
          this.result = this.firstNumber - this.secondNumber;
          break;
        case '*':
          this.result = this.firstNumber * this.secondNumber;
          break;
        case '/':
          if (this.secondNumber !== 0) {
            this.result = this.firstNumber / this.secondNumber;
          } else {
            this.result = null;
          }
          break;
      }
    }
  }
}
