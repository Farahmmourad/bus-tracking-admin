import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plan } from '../Models/Plan';
import { AdminService } from '../services/admin.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.scss',
})
export class PlansComponent implements OnInit {
  plans: Plan[] = [];
  constructor(private router: Router, private adminService: AdminService, private snackBar: MatSnackBar, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.adminService.getPlans().subscribe((result) => {
      this.plans = result;
      console.log(this.plans);
    });
  }

  addPage(): void {
    this.router.navigate(['/add-plan']);
  }

  updatePage(id: number): void {
    this.router.navigate([`edit-plan/${id}`]);
  }

  deletePlan(planId: number): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '300px',
      data: 'Are you sure you want to delete this plan?'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.adminService.deletePlan(planId).subscribe((res) => {
          this.snackBar.open('Plan deleted successfully', 'Close', {
            duration: 4000, // Duration in milliseconds
          });
          // Reload the page or navigate to another page
          window.location.reload();
        });
      }
    });
  }
}
