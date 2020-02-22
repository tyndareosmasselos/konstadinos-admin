import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private toastr: ToastrService) { 
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    })
  }

  get email() {
    return this.loginForm.get("email");
  }

  get password() {
    return this.loginForm.get("password");
  }

  
  onSubmit(){
    this.auth.login(this.loginForm.value).then(res => {
      this.toastr.success("Συνδεθήκατε επιτυχώς.");
      console.log(res);
    }, err => {
      this.toastr.error(err.message);
      console.log(err.message);
    })
  }

  ngOnInit() {

  }

}
