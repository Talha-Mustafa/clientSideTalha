
//*****************************ANGULAR MODULES************************
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



//------------------XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX---------------------

//*****************************COMPONENTS*****************************
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { AddListingComponent } from './add-listing/add-listing.component';


//------------------XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX---------------------


//*****************************NGX-BOOSTRAP****************************
 import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
 import { TooltipModule } from 'ngx-bootstrap/tooltip';
 import { ModalModule } from 'ngx-bootstrap/modal';
//------------------XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX---------------------


//************IMPORTING ROUTER FILE**********
import { appRoutes } from '../routes';
//------------------XXXXX---------------------

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesComponent,
    AddListingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
//*********INCLUDING ROUTER*********
    RouterModule.forRoot(appRoutes),
//------------XXXXXXXXX-------------



//*******NGX-BOOSTRAP SETUP**********
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
//------------XXXXXXXXX---------------
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
