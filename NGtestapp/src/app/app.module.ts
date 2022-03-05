import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Layout/navbar/navbar.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { PersonIndexComponent } from './Persons/person-index/person-index.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HomeComponent } from './home/home.component';
import { PersonCreateComponent } from './Persons/person-create/person-create.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PersonEditComponent } from './Persons/person-edit/person-edit.component';
import { PersonDeleteComponent } from './Persons/person-delete/person-delete.component';
import { AddressEditComponent } from './Addresses/address-edit/address-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PersonIndexComponent,
    HomeComponent,
    PersonCreateComponent,
    PersonEditComponent,
    PersonDeleteComponent,
    AddressEditComponent
  ],
  imports: [
    MatFormFieldModule,
    MatPaginatorModule,
    FormsModule,
    MatTableModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
