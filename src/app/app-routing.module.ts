import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CatListComponent} from "./components/cat-list/cat-list.component";
import {CatIdComponent} from "./components/cat-id/cat-id.component";
import {AddCatComponent} from "./components/add-cat/add-cat.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {LoginComponent} from "./components/login/login.component";
import {LogoutComponent} from "./components/logout/logout.component";
import {DelCatComponent} from "./components/del-cat/del-cat.component";
import {UpdCatComponent} from "./components/upd-cat/upd-cat.component";
import {DelCatPageComponent} from "./components/del-cat-page/del-cat-page.component";

// const routes: Routes = [];

const routes: Routes = [
  { path: '', redirectTo: 'cat-list', pathMatch: "full" },
  { path: 'cat-list', component: CatListComponent },
  { path: 'cat_id', component: CatIdComponent },
  { path: 'add-cat', component: AddCatComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'upd-cat', component: UpdCatComponent },
  { path: 'del_cat_page', component: DelCatPageComponent },
  { path: 'del_cat', component: DelCatComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
