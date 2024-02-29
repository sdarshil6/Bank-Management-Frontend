import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { MyCustomPipePipe } from './my-custom-pipe.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { CustomerModule } from './customer/customer.module';
import { AccountModule } from './account/account.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BadRequestComponent } from './bad-request/bad-request.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    MyCustomPipePipe,
    ParentComponent,
    ChildComponent,
    NavbarComponent,
    routingComponents,
    BadRequestComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CustomerModule,
    AccountModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent],
  

})
export class AppModule { }

