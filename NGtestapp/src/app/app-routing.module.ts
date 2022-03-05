import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressEditComponent } from './Addresses/address-edit/address-edit.component';
import { HomeComponent } from './home/home.component';
import { PersonCreateComponent } from './Persons/person-create/person-create.component';
import { PersonDeleteComponent } from './Persons/person-delete/person-delete.component';
import { PersonEditComponent } from './Persons/person-edit/person-edit.component';
import { PersonIndexComponent } from './Persons/person-index/person-index.component';

const routes: Routes = [
  { path: 'people', component: PersonIndexComponent },
  { path: 'person/create', component: PersonCreateComponent },
  { path: 'person/edit/:id', component: PersonEditComponent },
  { path: 'address/edit/:id', component: AddressEditComponent },
  { path: 'person/delete/:id', component: PersonDeleteComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
