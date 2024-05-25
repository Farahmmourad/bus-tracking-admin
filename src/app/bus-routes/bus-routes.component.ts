import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bus-routes',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './bus-routes.component.html',
  styleUrl: './bus-routes.component.scss',
})
export class BusRoutesComponent implements OnInit{
  routes: any[] = [];
  constructor(private router: Router, private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getRoutes().subscribe((result) => {
      this.routes = result;
      console.log(this.routes);
    });
  }
  addPage(): void {
    this.router.navigate(['/addBusRoutes']);
  }
}
