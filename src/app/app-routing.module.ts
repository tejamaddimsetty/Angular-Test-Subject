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
  { path: 'minitech', component: MinitechComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
