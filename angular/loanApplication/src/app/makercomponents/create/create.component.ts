import { CustomerapplicationService } from './../../service/customerapplication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup;

  constructor(private customerApplication: CustomerapplicationService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('type') === 'checker') {
      this.router.navigateByUrl('/approve');
    }
    this.createForm = this.formBuilder.group({
      id: [],
      customerCode: [''],
    customerName: [''],
    customerAddressPrimary: [''],
    customerAddressSecondary: [''],
    customerPinCode: [''],
    customerEmailAddress: [''],
    customerPhoneNumber: [''],
    primaryContactPerson: [''],
    customerStatusCode: [''],
    approverPersonId: [''],
    approvedTime: [''],
    approvalStatus: [''],
    inactiveInd: [''],
    auditUserId: [''],
    auditStatus: [''],
    auditReason: [''],
    auditEntryDateTime: [''],
    auditModifiedDateTime: [''],
    isQueued: [''],
    });
  }

  onSubmit() {
    this.customerApplication.createUser(this.createForm.value)
    .subscribe( data => {
      this.router.navigateByUrl('/viewAll');
    });
  }

}
