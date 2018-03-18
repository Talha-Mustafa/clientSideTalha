 import { HomeComponent } from './app/home/home.component';
 import { CategoriesComponent } from './app/categories/categories.component';
 import { AddListingComponent } from './app/add-listing/add-listing.component';
// import { AuthenticationGuardService } from './app/services/authentication-guard.service';
 import { Routes } from '@angular/router';


 export const appRoutes:  Routes =[

{
    path: 'home',
    component: HomeComponent,


},
{
    path: 'categories',
    component: CategoriesComponent,

},
{
    path: 'addlisting',
    component: AddListingComponent
},
{
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
}

 ];