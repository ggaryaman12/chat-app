import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { apiService } from '../services/api.service'
import { LoaderService } from '../services/loader.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private apiService: apiService, private loaderService: LoaderService) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      username : ['', [Validators.required]],
      fullName : ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      gender: ['', [Validators.required]],
    },{ validator: this.passwordMatchValidator() });
  }

   // Simulate Google sign-in
   signInWithGoogle(): void {
    console.log('Google Sign-in triggered');
    // Here you could trigger an OAuth flow for Google sign-in
  }

  // Simulate Apple sign-in
  signInWithApple(): void {
    console.log('Apple Sign-in triggered');
    // Here you could trigger an OAuth flow for Apple sign-in
  }

  // Handle form submission
  onSubmit(): void {
    if (this.signupForm.valid) {
      const signupData = this.signupForm.value;
      console.log('Form Submitted', signupData);
      this.loaderService.showLoader();
      this.apiService.signup(signupData).subscribe(
        (response) => {
          console.log('Login successful', response);
          // Handle success, e.g., navigate to dashboard
        },
        (error) => {
          console.error('Login failed', error);
        }
      );
    }
  }

  passwordMatchValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const password = control.get('password');
      const confirmPassword = control.get('confirmPassword');
      if (password && confirmPassword && password.value !== confirmPassword.value) {
        return { passwordMismatch: true };
      }
      return null;
    };
  }

}
