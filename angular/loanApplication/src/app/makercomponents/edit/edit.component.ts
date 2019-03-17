import { CustomerApplication } from './../../models/CustomerApplication.model';
import { CustomerapplicationService } from './../../service/customerapplication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  private customerApplicationData: CustomerApplication;
  editForm: FormGroup;

  constructor(private customerApplication: CustomerapplicationService, private formBuilder: FormBuilder, private router: Router) { }

fetch(id) {
  this.customerApplication.fetchOne(id).subscribe(customerData => {
    this.customerApplicationData = customerData;
    console.log(this.customerApplicationData);
    this.editForm.setValue(this.customerApplicationData) ;
  });
}

  ngOnInit() {
    if (localStorage.getItem('type') === 'checker') {
      this.router.navigateByUrl('/approve');
    }
    const id = localStorage.getItem('editUserId');
    console.log(id);
    this.editForm = this.formBuilder.group({
      id : [],
      customerCode: [],
    customerName: [],
    customerAddressPrimary: [],
    customerAddressSecondary: [],
    customerPinCode: [],
    customerEmailAddress: [],
    customerPhoneNumber: [],
    primaryContactPerson: [],
    customerStatusCode: [],
    approverPersonId: [],
    approvedTime: [],
    approvalStatus: [],
    inactiveInd: [],
    auditUserId: [],
    auditStatus: [],
    auditReason: [],
    auditEntryDateTime: [],
    auditModifiedDateTime: [],
    isQueued: [],
    });
    this.fetch(id );
    console.log(this.customerApplicationData);

  }

  onSubmit() {
      this.customerApplication.updateUser(this.editForm.value)
    .subscribe( data => {
      this.router.navigateByUrl('/viewAll');
    }, err => {this.router.navigateByUrl('/viewAll'); } );
  }

  routeForApproval(){
    console.log("damn"+ this.editForm.value );
    this.editForm.get('customerStatusCode').setValue('PFC');
    this.editForm.get('isQueued').setValue(1);
    this.customerApplication.updateUser(this.editForm.value);
  }

}
