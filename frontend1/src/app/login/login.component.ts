import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
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
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      console.log('Form Submitted', loginData);
      
      // Example API request (replace with your API endpoint)
      this.http.post('https://example.com/api/login', loginData).subscribe(
        (response) => {
          console.log('Login successful', response);
          // Handle success, e.g., navigate to dashboard
        },
        (error) => {
          console.error('Login failed', error);
          // Handle error, e.g., show error message to user
        }
      );
    }
  }

}
