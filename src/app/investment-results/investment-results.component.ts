import { Component, computed } from '@angular/core';
import { InvestmentService } from './../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: false,
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  constructor(private readonly investmentService: InvestmentService) {}
  results = computed(() => this.investmentService.results());
}
