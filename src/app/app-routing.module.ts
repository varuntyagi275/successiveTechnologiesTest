import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [{
  path:'', redirectTo:'userList',pathMatch:'full'
}, 
{
  path:'userList',
  component:UserListComponent
}, 
{
  path:'sign-up',
  component:SignupComponent
}, 

{
  path:'userDetails',
  component:UserDetailsComponent
}
,
{path:'**',
redirectTo:'userList',


}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
