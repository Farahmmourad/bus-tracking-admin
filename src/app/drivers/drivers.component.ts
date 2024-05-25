import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-drivers',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './drivers.component.html',
  styleUrl: './drivers.component.scss',
})
export class DriversComponent {
  buses: any[] = [];
  constructor(private router: Router, private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getBuses().subscribe((result) => {
      this.buses = result;
      console.log(this.buses);
    });
  }
  addPage(): void {
    this.router.navigate(['/addDriver']);
  }
}
