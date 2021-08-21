import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponentComponent } from './quote-component/quote-component.component';
import { QuoteDetailsComponentComponent } from './quote-component/quote-details-component/quote-details-component.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { ModalComponent } from './modal/modal.component';
import { FormComponent } from './modal/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponentComponent,
    QuoteDetailsComponentComponent,
    NavbarComponentComponent,
    FooterComponentComponent,
    HeaderComponentComponent,
    ModalComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
