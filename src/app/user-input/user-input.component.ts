import { FormsModule } from '@angular/forms';
import { InvestmentService } from './../investment.service';
import { Component, output, signal } from '@angular/core';
import { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  // calculate = output<InvestmentInput>();

  initialInvestment = signal('0');
  annualInvestment = signal('0');
  expectedReturn = signal('5');
  duration = signal('10');

  constructor(private readonly investmentService: InvestmentService) {}

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: Number(this.initialInvestment()),
      duration: Number(this.duration()),
      expectedReturn: Number(this.expectedReturn()),
      annualInvestment: Number(this.annualInvestment()),
    });
    this.annualInvestment.set('0');
    this.initialInvestment.set('0');
    this.expectedReturn.set('0');
    this.duration.set('0');
  }
}
