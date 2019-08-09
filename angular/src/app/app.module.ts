import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { routerConfig } from './nav.config';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewEntryComponent } from './components/new-entry/new-entry.component';
import { SearchComponent } from './components/search/search.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ManageLookupsComponent } from './components/manage-lookups/manage-lookups.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptorService } from './services/auth/jwt-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { ResultsComponent } from './components/results/results.component';
import { EntryNotesComponent } from './components/result/entry-notes/entry-notes.component';
import { LookupValComponent } from './components/manage-lookups/lookup/lookup-val/lookup-val.component';
import { LookupComponent } from './components/manage-lookups/lookup/lookup.component';
import { RangeLookupComponent } from './components/manage-lookups/range-lookup/range-lookup.component';
import { RangeLookupValComponent } from './components/manage-lookups/range-lookup/range-lookup-val/range-lookup-val.component';
import { RemoveWhitespacePipe } from './pipes/remove-whitespace.pipe';
import { CamelizePipe } from './pipes/camelize.pipe';
import { ResultComponent } from './components/result/result.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { SubscriptionComponent } from './components/profile/subscription/subscription.component';
import { SingleEntryViewComponent } from './components/single-entry-view/single-entry-view.component';
import { SubscribeModalComponent } from './components/subscribe-modal/subscribe-modal.component';
import { EditEntryModalComponent } from './components/edit-entry-modal/edit-entry-modal.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { ImportDataComponent } from './components/import-data/import-data.component';
import { UserValComponent } from './components/manage-users/user-val/user-val.component';
import { EditUserModalComponent } from './components/manage-users/edit-user-modal/edit-user-modal.component';
import { CanAccessDirective } from './directives/can-access.directive';
import { RoleGuardService } from './services/roles/role-guard.service';
import { RolesService } from './services/roles/roles.service';
import { SharedSubModalComponent } from './components/shared-sub-modal/shared-sub-modal.component';
import { SharedSubComponent } from './components/shared-sub/shared-sub.component';
import { AssignSharedSubscriptionComponent } from './components/assign-shared-subscription/assign-shared-subscription.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NewEntryComponent,
    SearchComponent,
    LoginComponent,
    ProfileComponent,
    ManageLookupsComponent,
    ResultsComponent,
    EntryNotesComponent,
    LookupValComponent,
    LookupComponent,
    RangeLookupComponent,
    RangeLookupValComponent,
    RemoveWhitespacePipe,
    CamelizePipe,
    ResultComponent,
    SubscriptionComponent,
    SingleEntryViewComponent,
    SubscribeModalComponent,
    EditEntryModalComponent,
    ManageUsersComponent,
    ImportDataComponent,
    UserValComponent,
    EditUserModalComponent,
    CanAccessDirective,
    SharedSubModalComponent,
    SharedSubComponent,
    AssignSharedSubscriptionComponent,
  ],
  entryComponents: [
    SubscribeModalComponent,
    EditEntryModalComponent,
    EditUserModalComponent,
    SharedSubModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgMultiSelectDropDownModule.forRoot(),
    ToastrModule.forRoot(),
    RouterModule.forRoot(
      routerConfig,
      { enableTracing: false }, // <-- debugging purposes only
    ),
  ],
  providers: [
    AuthService,
    AuthGuardService,
    RoleGuardService,
    RolesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
