import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GalleryComponentCP } from './gallery/gallery.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FmsComponent } from './on-offer/fms/fms.component';
import { HeavyDutyComponent } from './on-offer/new-forklifts/heavy-duty/heavy-duty.component';
import { LpgPetrolComponent } from './on-offer/new-forklifts/lpg-petrol/lpg-petrol.component';
import { NewForkliftsComponent } from './on-offer/new-forklifts/new-forklifts.component';
import { OnOfferComponent } from './on-offer/on-offer.component';
import { RefurbishedComponent } from './on-offer/refurbished/refurbished.component';
import { WarehousingEquipmentComponent } from './on-offer/warehousing-equipment/warehousing-equipment.component';
import { DieselComponent } from './on-offer/new-forklifts/diesel/diesel.component';
import { ElectricComponent } from './on-offer/new-forklifts/electric/electric.component';

const routes: Routes = [
  { path:  'home', component:  HomePageComponent},
  { path:  'about', component:  AboutUsComponent},
  { path:  'offer', component:  OnOfferComponent},
  { path:  'newForklifts', component:  NewForkliftsComponent},
  { path:  'lpgPetrol', component:  LpgPetrolComponent},
  { path:  'diesel', component:  DieselComponent},
  { path:  'electric', component:  ElectricComponent},
  { path:  'heavyDuty', component:  HeavyDutyComponent},
  { path:  'Warehousing', component:  WarehousingEquipmentComponent},
  { path:  'refurbished', component:  RefurbishedComponent},
  { path:  'fms', component:  FmsComponent},
  { path:  'gallery', component:  GalleryComponentCP},
  { path:  'contactPage', component:  ContactUsComponent},
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
