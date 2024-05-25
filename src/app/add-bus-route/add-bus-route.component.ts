import { CommonModule } from '@angular/common';
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

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      description: ['', Validators.required],
      routeNumber: ['', Validators.required],
      locations: this.fb.array([]),
    });
    // Add an initial set of inputs
    // this.addLocation();
  }

  get locations(): FormArray {
    return this.form.get('locations') as FormArray;
  }

  addLocation() {
    const locationFormGroup = this.fb.group({
      name: ['', Validators.required],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required],
    });
    this.locations.push(locationFormGroup);
  }

  removeLocation(index: number) {
    this.locations.removeAt(index);
  }
}
