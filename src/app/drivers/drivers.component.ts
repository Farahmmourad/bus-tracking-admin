import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drivers',
  standalone: true,
  imports: [],
  templateUrl: './drivers.component.html',
  styleUrl: './drivers.component.scss',
})
export class DriversComponent {
  constructor(private router: Router) {}

  addPage(): void {
    this.router.navigate(['/addDriver']);
  }
}
