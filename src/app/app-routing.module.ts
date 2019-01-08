import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppHomeComponent } from './components/app-home/app-home.component';
import { AppContactComponent } from './components/app-contact/app-contact.component';

import { AppPageNotFoundComponent } from './components/shared/app-page-not-found/app-page-not-found.component';
import { AppContentComponent } from './components/shared/app-content/app-content.component';

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

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '', component: AppContentComponent, children: [
      /* +++ Home & Contacts Menu +++ */
      { path: 'home', component: AppHomeComponent },
      { path: 'contact', component: AppContactComponent },
      /* +++ Artemis Dropdown Menu +++ */
      { path: 'principles', component: PrinciplesComponent },
      { path: 'who-are-we', component: WhoAreWeComponent },
      { path: 'values', component: ValuesComponent },
      { path: 'approach', component: ApproachComponent },
      { path: 'ethics', component: EthicsComponent },
      /* +++ Coaching Dropdown Menu +++ */
      { path: 'individual-coaching', component: IndividualCoachingComponent },
      { path: 'team-coaching', component: TeamCoachingComponent },
      { path: 'ceo-coaching', component: CeoCoachingComponent },
      { path: 'organisation-coaching', component: OrganisationCoachingComponent },
      /* +++ Consulting Dropdown Menu +++ */
      { path: 'change-management', component: ChangeManagementComponent },
      { path: 'team-building', component: TeamBuildingComponent }
    ]
  },
  { path: '**', component: AppPageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
