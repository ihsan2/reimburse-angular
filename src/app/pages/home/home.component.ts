import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ReimburseService } from 'src/app/service/reimburse.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private service: ReimburseService, private router: Router) {}

  reimburseData: any;

  ionViewWillEnter() {
    this.service.GetList("").subscribe((resp) => {
      this.reimburseData = resp;
    });
  }

  doLogout() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }

  goDetail(item: any) {
    this.router.navigate([
      'detail',
      {
        item: JSON.stringify(item),
      },
    ]);
  }

  searchData(event: any) {
    let text = event.detail.value;
    this.service.GetList(text).subscribe((resp) => {
      this.reimburseData = resp;
    });
  }

  ngOnInit() {
    this.service.GetList("").subscribe((resp) => {
      this.reimburseData = resp;
    });
  }
}
