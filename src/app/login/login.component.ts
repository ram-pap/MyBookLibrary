import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../service/auth/authentication.service'
import { AlertService } from '../service/alert/alert.service'
import { first,map } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  loginForm: FormGroup;
  submitted = false;
  loading = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
     private router: Router, 
     private authService: AuthenticationService,
     private alertService: AlertService
     ) {
      if (this.authService.currentUserValue) {
        this.router.navigate(['/']);
    }
      }
  

  ngOnInit() {
   
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  get f() { return this.loginForm.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    if (this.submitted) {
     

      this.authService.login(this.f.email.value,this.f.password.value).pipe(first())
      .subscribe(
          response => {
            let resSTR = JSON.stringify(response);
            let resJSON = JSON.parse(resSTR);
            console.log(resJSON._body);
              this.router.navigate([this.returnUrl]);
          },
          error => {
              this.alertService.error(error);
              this.loading = false;
          });
      this.router.navigate(['/home']);
    }
  }

}
