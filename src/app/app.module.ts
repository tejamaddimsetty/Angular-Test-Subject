import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';
import { ExploreComponent } from './explore/explore.component';
import { MedcityComponent } from './medcity/medcity.component';
import { WaveComponent } from './wave/wave.component';
import { MinitechComponent } from './minitech/minitech.component';
import { DatasoftComponent } from './datasoft/datasoft.component';
import { MedicComponent } from './medic/medic.component';
import { HyggeComponent } from './hygge/hygge.component';
import { WhiterComponent } from './whiter/whiter.component';
import { RealestateComponent } from './realestate/realestate.component';
import { SneakerComponent } from './Sneaker/sneaker.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    ServicesComponent,
    WorksComponent,
    ContactComponent,
    ExploreComponent,
    MedcityComponent,
    WaveComponent,
    MinitechComponent,
    DatasoftComponent,
    MedicComponent,
    HyggeComponent,
    WhiterComponent,
    RealestateComponent,
    SneakerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
