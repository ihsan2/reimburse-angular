import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ReimburseService } from 'src/app/service/reimburse.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ReimburseService,
    private toastr: ToastrService
  ) {}

  detail: any;

  goBack() {
    this.router.navigate(['home']);
  }

  doApprove() {
    this.service
      .UpdateStatus(this.detail.id, {
        ...this.detail,
        status: 'Approved',
      })
      .subscribe((res) => {
        this.toastr.success('Succesfully Approved.');
        this.goBack();
      });
  }

  doReject() {
    this.service
      .UpdateStatus(this.detail.id, {
        ...this.detail,
        status: 'Rejected',
      })
      .subscribe((res) => {
        this.toastr.success('Succesfully Rejected.');
        this.goBack();
      });
  }

  ngOnInit() {
    this.route.params.subscribe((res) => {
      this.detail = JSON.parse(res['item']);
    });
  }
}
