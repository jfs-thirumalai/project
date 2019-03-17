import { CustomerapplicationService } from './../../service/customerapplication.service';
import { CustomerApplication } from './../../models/CustomerApplication.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css']
})
export class ApprovalComponent implements OnInit {

  customerApplication: CustomerApplication[] ;
  constructor(private _customerAppService: CustomerapplicationService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('type') === 'maker') {
      this.router.navigateByUrl('/viewAll');
    }
    this._customerAppService.fetchCustomerApplicationForChecker().subscribe(customerApplication => {
      this.customerApplication = customerApplication;
      console.log(this.customerApplication);
    } );
  }

  approve(customerApplication: CustomerApplication) {
    customerApplication.approverPersonId = 'APPROVER';
    customerApplication.customerStatusCode = 'CLD';
    customerApplication.isQueued = 0;
    this._customerAppService.updateUser(customerApplication)
        .subscribe(data => {
          this.router.navigateByUrl('/approve');
        });

  }
  reject(customerApplication: CustomerApplication) {
    customerApplication.approverPersonId = 'APPROVER';
    customerApplication.customerStatusCode = 'RFC';
    customerApplication.isQueued = 0;
    this._customerAppService.updateUser(customerApplication)
        .subscribe(data => {
          this.router.navigateByUrl('/approve');
        });

  }

}
