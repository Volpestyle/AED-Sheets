import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewEntryComponent } from './components/new-entry/new-entry.component';
import { SearchComponent } from './components/search/search.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ManageLookupsComponent } from './components/manage-lookups/manage-lookups.component';
import { AuthGuardService as AuthGuard } from './services/auth/auth-guard.service';
import { SingleEntryViewComponent } from './components/single-entry-view/single-entry-view.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { RoleGuardService } from './services/roles/role-guard.service';
import { ImportDataComponent } from './components/import-data/import-data.component';
import { AssignSharedSubscriptionComponent } from './components/assign-shared-subscription/assign-shared-subscription.component';

export const routerConfig: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'new-entry',
    component: NewEntryComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'search',
    component: SearchComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'manage-lookups',
    component: ManageLookupsComponent,
    canActivate: [AuthGuard, RoleGuardService],
    data: { permissions: ['manageLookups'] },
  },
  {
    path: 'single/:id',
    component: SingleEntryViewComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'manage-users',
    component: ManageUsersComponent,
    canActivate: [AuthGuard, RoleGuardService],
    data: { permissions: ['manageUsers'] },
  },
  {
    path: 'import-data',
    component: ImportDataComponent,
    canActivate: [AuthGuard, RoleGuardService],
    data: { permissions: ['importHistoricalData'] },
  },
  {
    path: 'assign-shared-sub',
    component: AssignSharedSubscriptionComponent,
    canActivate: [AuthGuard, RoleGuardService],
    data: { permissions: ['assignSharedSub'] },
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
