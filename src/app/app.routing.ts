import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { CountryDetailComponent } from "app/country-detail/country-detail.component";
import { CountryListComponent } from "app/country-list/country-list.component";
import { CountryMaintComponent } from "app/country-maint/country-maint.component";

export const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'country-list/:count', component: CountryListComponent },
  { path: 'country-detail/:country', component: CountryDetailComponent },
  { path: 'country-maint', component: CountryMaintComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '', component: DashboardComponent },
  { path: '**', component: DashboardComponent }
];
