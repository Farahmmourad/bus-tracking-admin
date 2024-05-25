import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AdminService } from '../services/admin.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-driver',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-driver.component.html',
  styleUrl: './add-driver.component.scss',
})
export class AddDriverComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  routes: any[] = []; // Variable to hold department data

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [''],
      FirstName: [''],
      LastName: [''],
      email: [''],
      password: [''],
      camera: [''],
      routeId: [''], // Assuming this holds route id
    });

    // Fetch department data from backend
    this.adminService.getRoutes().subscribe((result) => {
      this.routes = result;
      console.log(this.routes);
    });
  }

  onSubmit() {
    const formData = this.form.value;
    const requestPayload = {
      bus: {
        name: formData.name,
        routeId: 1,
      },
      driver: {
        FirstName: formData.FirstName,
        LastName: formData.LastName,
        email: formData.email,
        password: formData.password,
        roleId: 1, // Assuming 1 for driver role
      },
    };

    this.http
      .post<any>(
        'https://localhost:7103/api/Buses/add-bus-with-driver',
        requestPayload
      )
      .subscribe(
        (response) => {
          // Handle response as needed
          console.log('Response from backend:', response);
          // Reset form or navigate to another page
          this.form.reset();
        },
        (error) => {
          // Handle error
          console.error('Error:', error);
        }
      );
  }
}
