import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private builder: FormBuilder,
    private toastr: ToastrService,
    private service: AuthService,
    private router: Router
  ) {}

  userdata: any;

  loginform = this.builder.group({
    username: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required),
  });

  proceedLogin() {
    if (this.loginform.valid) {
      this.service.GetByID(this.loginform.value.username).subscribe({
        next: (res) => {
          this.userdata = res;
          if (this.userdata.password === this.loginform.value.password) {
            sessionStorage.setItem('username', this.userdata.id);
            this.router.navigate(['home']);
          } else {
            this.toastr.error('Wrong password.');
          }
        },
        error: (err) => {
          this.toastr.error(err);
        },
      });
    } else {
      this.toastr.warning('Username dan password required.');
    }
  }

  ngOnInit() {}
}
