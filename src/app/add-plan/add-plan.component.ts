import { Component } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-plan',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-plan.component.html',
  styleUrl: './add-plan.component.scss',
})
export class AddPlanComponent {
  planGroup = new FormGroup({
    name : new FormControl('', Validators.required),
    color : new FormControl('', Validators.required),
    numberOfDays : new FormControl('', Validators.required),
    price : new FormControl('', Validators.required),
  }
);
  
  constructor(private adminService: AdminService, private snackBar: MatSnackBar, private router: Router) {}

  addPlan(): void {
    this.adminService.addPlan(this.planGroup.value).subscribe(res =>{
      this.snackBar.open('Plan added successfully', 'Close', {
        duration: 4000, // Duration in milliseconds
      });
      this.router.navigate(['/plans']);
    })
  }
}
