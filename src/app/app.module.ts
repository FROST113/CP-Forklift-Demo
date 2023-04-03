import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutUsComponent } from './about-us/about-us.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponentCP } from './gallery/gallery.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FmsComponent } from './on-offer/fms/fms.component';
import { HeavyDutyComponent } from './on-offer/new-forklifts/heavy-duty/heavy-duty.component';
import { LpgPetrolComponent } from './on-offer/new-forklifts/lpg-petrol/lpg-petrol.component';
import { NewForkliftsComponent } from './on-offer/new-forklifts/new-forklifts.component';
import { OnOfferComponent } from './on-offer/on-offer.component';
import { RefurbishedComponent } from './on-offer/refurbished/refurbished.component';
import { WarehousingEquipmentComponent } from './on-offer/warehousing-equipment/warehousing-equipment.component';
import { LightgalleryModule } from 'lightgallery/angular';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    FooterComponent,
    AboutUsComponent,
    OnOfferComponent,
    NewForkliftsComponent,
    LpgPetrolComponent,
    HeavyDutyComponent,
    WarehousingEquipmentComponent,
    RefurbishedComponent,
    FmsComponent,
    GalleryComponentCP,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LightgalleryModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
