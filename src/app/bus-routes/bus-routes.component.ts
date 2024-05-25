import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bus-routes',
  standalone: true,
  imports: [],
  templateUrl: './bus-routes.component.html',
  styleUrl: './bus-routes.component.scss',
})
export class BusRoutesComponent {
  constructor(private router: Router) {}

  addPage(): void {
    this.router.navigate(['/addBusRoutes']);
  }
}
