import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:UserFormComponent},
  {path:'user/new',component:UserFormComponent},
  {path:'user/edite',component:UserFormComponent},
  {path:'user/:id',component:UserFormComponent},
  {path:'user',component:UserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
