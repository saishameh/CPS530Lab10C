import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';  // Import the JsonPipe

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, JsonPipe, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true  
})
export class AppComponent {
  title = 'my-web-page';
  userForm: FormGroup;
  age: number | null = null;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      birthYear: [
        '',
        [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())],
      ],
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const birthYear = this.userForm.value.birthYear;
      const fixedYear = 2024; 
      this.age = fixedYear - birthYear;
    }
  }
}
