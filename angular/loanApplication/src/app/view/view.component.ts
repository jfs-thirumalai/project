import { ICustomerApplication } from './customerApplication';
import { ViewAppService } from './../service/view-app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
templateUrl: './view.component.html',
 // templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  displayedColumns: string[] = ['customerCode', 'customerName'];
  customerApplication: ICustomerApplication[];
  constructor(private _viewAppService: ViewAppService) { }

  ngOnInit() {
    this._viewAppService.fetchCustomerApplication().subscribe(customerApplication => {
      this.customerApplication = customerApplication;
      console.log(this.customerApplication);
    } );
    console.log(this.customerApplication);
  }

}
