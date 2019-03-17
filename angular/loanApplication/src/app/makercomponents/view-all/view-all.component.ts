import { Component, OnInit } from '@angular/core';
import { CustomerApplication } from '../../models/CustomerApplication.model';
import { CustomerapplicationService } from '../../service/customerapplication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

  customerApplication: CustomerApplication[] ;
  constructor(private _customerAppService: CustomerapplicationService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('type') === 'checker') {
      this.router.navigateByUrl('/approve');
    }
    this._customerAppService.fetchCustomerApplication().subscribe(customerApplication => {
      this.customerApplication = customerApplication;
      console.log(this.customerApplication);
    } );
  }

  addUser() {
    this.router.navigateByUrl('/create');
  }
  deleteUser(customerApplication: CustomerApplication) {
    this._customerAppService.deleteApplication(customerApplication).subscribe(data => {this.router.navigateByUrl('/viewAll'); });
  }

  editUser(customerApplication: CustomerApplication): void {
    localStorage.removeItem('editUserId');
    localStorage.setItem('editUserId', customerApplication.customerCode.toString());
    console.log(customerApplication.customerCode.toString());
    this.router.navigateByUrl('/edit');
  }


}
