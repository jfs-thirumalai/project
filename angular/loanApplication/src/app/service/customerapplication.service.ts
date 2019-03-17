import { CustomerApplication } from './../models/CustomerApplication.model';
import { ICustomerApplication } from './../view/customerApplication';
import { Injectable, Pipe } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerapplicationService {

  private baseUrl = 'tstin/api/v2/viewapplications';
  constructor(private _http: HttpClient) {
    //this.fetchCustomerApplication();
}

fetchCustomerApplication(): Observable<ICustomerApplication[]> {
  return this._http.get<ICustomerApplication[]>(this.baseUrl + '/customerApplication').
    pipe(tap(data => console.log(data), error => console.log(error)));
}

fetchCustomerApplicationForChecker(): Observable<ICustomerApplication[]> {
  return this._http.get<ICustomerApplication[]>(this.baseUrl + '/customerApplication/checker/listForApproval').
    pipe(tap(data => console.log(data), error => console.log(error)));
}

createUser(customerApplicationModel: CustomerApplication) {
  return this._http.post(this.baseUrl + '/customerApplicatoin/create', customerApplicationModel);
}
fetchOne(id: String): Observable<ICustomerApplication> {
  return this._http.get<ICustomerApplication>(this.baseUrl + '/customerApplication/' + id).
    pipe(tap(data => data, error => console.log(error)));
}
updateUser(cm: CustomerApplication) {
  console.log('insdie service');
  console.log('model' + cm);
  return this._http.post(this.baseUrl + '/save', cm);
}
deleteApplication(customerApplication: CustomerApplication){
  return this._http.post(this.baseUrl + '/delete', customerApplication);
}
}
