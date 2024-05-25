import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from '../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Plan } from '../Models/Plan';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-plan',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './edit-plan.component.html',
  styleUrl: './edit-plan.component.scss',
})
export class EditPlanComponent implements OnInit{
  plan: Plan = {
    id: 0,
    name: '',
    color: '',
    price: '0',
    numberOfDays: 0,
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private adminService: AdminService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    const planId = Number(this.route.snapshot.paramMap.get('id'));

    this.adminService.getPlanById(planId).subscribe((result) => {
      this.plan = result;
      console.log(this.plan);
    });
  }

  updatePlan(): void {
    // Update plan details
    this.adminService.updatePlan(this.plan).subscribe(
      () => {
        this.snackBar.open('Plan updated successfully', 'Close', {
          duration: 4000, // Duration in milliseconds
        });
        this.router.navigate(['/plans']);
      },
      (error) => {
        console.error('Error updating plan:', error);
      }
    );
  }
}
