import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./view/home-page/home-page.component";
import {AddUsersPageComponent} from "./view/add-users-page/add-users-page.component";
import {ViewUsersPageComponent} from "./view/view-users-page/view-users-page.component";

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'add-users', component: AddUsersPageComponent },
  { path: 'view-users', component: ViewUsersPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
