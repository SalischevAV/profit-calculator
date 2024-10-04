import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, Output } from '@angular/core';
import { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentInput>();

  initialInvestment = '0';
  annualInvestment = '0';
  expectedReturn = '0';
  duration = '10';

  onSubmit() {
    this.calculate.emit({
      initialInvestment: Number(this.initialInvestment),
      duration: Number(this.duration),
      expectedReturn: Number(this.expectedReturn),
      annualInvestment: Number(this.annualInvestment),
    });
  }
}
