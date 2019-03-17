import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewAllComponent } from './makercomponents/view-all/view-all.component';
import { EditComponent } from './makercomponents/edit/edit.component';
import { SingleViewComponent } from './makercomponents/single-view/single-view.component';
import { CreateComponent } from './makercomponents/create/create.component';
import { ApprovalComponent } from './checkercomponents/approval/approval.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    LoginComponent,
    ViewAllComponent,
    EditComponent,
    SingleViewComponent,
    CreateComponent,
    ApprovalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
