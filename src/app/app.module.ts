
//*****************************ANGULAR MODULES************************
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//********************************************************************

//*****************************COMPONENTS*****************************
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { AddListingComponent } from './add-listing/add-listing.component';



//*********************************************************************


//*****************************NGX-BOOSTRAP****************************
 import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
 import { TooltipModule } from 'ngx-bootstrap/tooltip';
 import { ModalModule } from 'ngx-bootstrap/modal';

//*********************************************************************



//************IMPORTING ROUTER FILE**********
import { appRoutes } from '../routes';
//*******************************************


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesComponent,
    AddListingComponent
  ],
  imports: [
    BrowserModule,
    
//INCLUDING ROUTER
    RouterModule.forRoot(appRoutes),
//*****************



//*******NGX-BOOSTRAP**********
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
//******************************
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
