import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Views
import { LoginComponent } from './Components/Views/login/login.component';
import { SignUpComponent } from './Components/Views/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
