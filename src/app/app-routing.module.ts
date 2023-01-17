import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListContactComponent} from "./components/list-contact/list-contact.component";
import {DetailContactComponent} from "./components/detail-contact/detail-contact.component";
import {AddContactComponent} from "./components/add-contact/add-contact.component";
import {LoginComponent} from "./components/login/login.component";


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'contacts', component: ListContactComponent },
  { path: 'contacts/:email', component: DetailContactComponent },
  { path: 'add', component: AddContactComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
