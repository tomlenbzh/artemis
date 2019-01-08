import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppHeaderComponent } from './components/shared/app-header/app-header.component';
import { AppFooterComponent } from './components/shared/app-footer/app-footer.component';
import { AppPageNotFoundComponent } from './components/shared/app-page-not-found/app-page-not-found.component';
import { AppContentComponent } from './components/shared/app-content/app-content.component';

import { AppHomeComponent } from './components/app-home/app-home.component';
import { AppContactComponent } from './components/app-contact/app-contact.component';

import { WhoAreWeComponent } from './components/artemis/who-are-we/who-are-we.component';
import { PrinciplesComponent } from './components/artemis/principles/principles.component';
import { ValuesComponent } from './components/artemis/values/values.component';
import { ApproachComponent } from './components/artemis/approach/approach.component';
import { EthicsComponent } from './components/artemis/ethics/ethics.component';

import { IndividualCoachingComponent } from './components/coaching/individual-coaching/individual-coaching.component';
import { TeamCoachingComponent } from './components/coaching/team-coaching/team-coaching.component';
import { CeoCoachingComponent } from './components/coaching/ceo-coaching/ceo-coaching.component';
import { OrganisationCoachingComponent } from './components/coaching/organisation-coaching/organisation-coaching.component';

import { ChangeManagementComponent } from './components/consulting/change-management/change-management.component';
import { TeamBuildingComponent } from './components/consulting/team-building/team-building.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppHomeComponent,
    AppPageNotFoundComponent,
    AppContentComponent,
    WhoAreWeComponent,
    PrinciplesComponent,
    ValuesComponent,
    ApproachComponent,
    EthicsComponent,
    IndividualCoachingComponent,
    TeamCoachingComponent,
    CeoCoachingComponent,
    OrganisationCoachingComponent,
    ChangeManagementComponent,
    TeamBuildingComponent,
    AppContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
