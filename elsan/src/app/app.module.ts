import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from './material/material.module';
import { HeaderSectionComponent } from './components/header-section/header-section.component';
import { CzymSieZajmujemySectionComponent } from './components/czym-sie-zajmujemy-section/czym-sie-zajmujemy-section.component';
import { PartnersSectionComponent } from './components/partners-section/partners-section.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderSectionComponent,
    CzymSieZajmujemySectionComponent,
    PartnersSectionComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    SlickCarouselModule,
  ],
  providers: [
 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
