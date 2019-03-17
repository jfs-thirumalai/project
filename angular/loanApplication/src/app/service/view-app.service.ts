import { ICustomerApplication } from './../view/customerApplication';
import { Injectable, Pipe } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViewAppService {

  constructor(private _http: HttpClient) {
      //this.fetchCustomerApplication();
  }

  fetchCustomerApplication(): Observable<ICustomerApplication[]> {
    return this._http.get<ICustomerApplication[]>('tstin/api/v2/viewapplications/customerApplication').
    pipe(tap(data => console.log(data), error => console.log(error)));
  }
}
