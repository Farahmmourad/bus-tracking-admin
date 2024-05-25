import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-bus-route',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-bus-route.component.html',
  styleUrl: './add-bus-route.component.scss',
})
export class AddBusRouteComponent implements OnInit{
  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      description: ['', Validators.required],
      routeNumber: ['', Validators.required],
      RouteStops: this.fb.array([]),
    });
    // Add an initial set of inputs
    // this.addLocation();
  }

  get RouteStops(): FormArray {
    return this.form.get('RouteStops') as FormArray;
  }

  addLocation() {
    const locationFormGroup = this.fb.group({
      BusStopName: ['', Validators.required],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required],
    });
    this.RouteStops.push(locationFormGroup);
  }

  removeLocation(index: number) {
    this.RouteStops.removeAt(index);
  }

  onSubmit() {
    const formData = this.form.value;
    this.http.post<any>('https://localhost:7103/api/Route/add', formData)
      .subscribe(response => {
        // Handle response as needed
        console.log('Response from backend:', response);
        // Reset form or navigate to another page
        this.form.reset();
      }, error => {
        // Handle error
        console.error('Error:', error);
      });
  }
}
