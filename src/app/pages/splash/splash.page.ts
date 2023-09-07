import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {
  constructor(private router: Router, private service: AuthService) {}

  ngOnInit() {
    setTimeout(() => {
      if (this.service.isLoggedId()) {
        this.router.navigate(['home']);
      } else {
        this.router.navigate(['login']);
      }
    }, 1000);
  }
}
