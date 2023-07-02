import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';
import { ExploreComponent } from './explore/explore.component';
import { MedcityComponent } from './medcity/medcity.component';
import { WaveComponent } from './wave/wave.component';
import { MedicComponent } from './medic/medic.component';
import { DatasoftComponent } from './datasoft/datasoft.component';
import { MinitechComponent } from './minitech/minitech.component';
import { WhiterComponent } from './whiter/whiter.component';
import { HyggeComponent } from './hygge/hygge.component';
import { RealestateComponent } from './realestate/realestate.component';
import { SneakerComponent } from './Sneaker/sneaker.component';
import { ShoplyComponent } from './shoply/shoply.component';
import { CuppacoComponent } from './cuppaco/cuppaco.component';
import { CoinstarComponent } from './coinstar/coinstar.component';
import { FasyunComponent } from './fasyun/fasyun.component';
import { JobappComponent } from './jobapp/jobapp.component';
import { OverpayComponent } from './overpay/overpay.component';
import { ParadoxComponent } from './paradox/paradox.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-me', component: AboutUsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'works', component: WorksComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'explore', component: ExploreComponent},
  { path: 'medcity', component: MedcityComponent},
  { path: 'wave', component: WaveComponent},
  { path: 'medic', component: MedicComponent},
  { path: 'datasoft', component: DatasoftComponent},
  { path: 'minitech', component: MinitechComponent},
  { path: 'whiter', component: WhiterComponent},
  { path: 'hygge', component: HyggeComponent},
  { path: 'realestate', component: RealestateComponent},
  { path: 'sneaker', component: SneakerComponent},
  { path: 'shoply', component: ShoplyComponent},
  { path: 'cuppaco', component: CuppacoComponent},
  { path: 'coinstar', component: CoinstarComponent},
  { path: 'fasyun', component: FasyunComponent},
  { path: 'jobapp', component: JobappComponent},
  { path: 'overpay', component: OverpayComponent},
  { path: 'paradox', component: ParadoxComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
