import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration/registration.component';
import { AdminComponent } from './admin/admin/admin.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  {  path: 'registration', component: RegistrationComponent},
  {  path: 'admin', component: AdminComponent},
  {  path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
