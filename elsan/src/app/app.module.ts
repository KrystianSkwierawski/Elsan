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
import { NapiszDoNasSectionComponent } from './components/napisz-do-nas-section/napisz-do-nas-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { FaqSectionComponent } from './components/faq-section/faq-section.component';
import { GoogleMapSectionComponent } from './components/google-map-section/google-map-section.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderSectionComponent,
    CzymSieZajmujemySectionComponent,
    PartnersSectionComponent,
    NapiszDoNasSectionComponent,
    FooterComponent,
    FaqSectionComponent,
    GoogleMapSectionComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    MaterialModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    SlickCarouselModule,
  ],
  providers: [
 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
