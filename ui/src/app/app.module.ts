import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminJobsComponent } from './admin-jobs/admin-jobs.component';
import { AdminJobsProgressComponent } from './admin-jobs-progress/admin-jobs-progress.component';
import { AdminAddWorkerComponent } from './admin-add-worker/admin-add-worker.component';
import { AdminAgencyWorkersComponent } from './admin-agency-workers/admin-agency-workers.component';
import { AdminClientDetailsComponent } from './admin-client-details/admin-client-details.component';
import { AdminObjectDetailsComponent } from './admin-object-details/admin-object-details.component';
import { AdminRegistrationsComponent } from './admin-registrations/admin-registrations.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AddNewAgencyComponent } from './add-new-agency/add-new-agency.component';
import { AddNewClientComponent } from './add-new-client/add-new-client.component';
import { AgencyComponent } from './agency/agency.component';
import { AgencyAddWorkerComponent } from './agency-add-worker/agency-add-worker.component';
import { AgencyClientDetailsComponent } from './agency-client-details/agency-client-details.component';
import { AgencyJobsComponent } from './agency-jobs/agency-jobs.component';
import { AgencyJobsWorkComponent } from './agency-jobs-work/agency-jobs-work.component';
import { AgencyObjectDetailsComponent } from './agency-object-details/agency-object-details.component';
import { AgencyWorkersComponent } from './agency-workers/agency-workers.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    AdminLoginComponent,
    AdminJobsComponent,
    AdminJobsProgressComponent,
    AdminAddWorkerComponent,
    AdminAgencyWorkersComponent,
    AdminClientDetailsComponent,
    AdminObjectDetailsComponent,
    AdminRegistrationsComponent,
    AdminUsersComponent,
    AddNewAgencyComponent,
    AddNewClientComponent,
    AgencyComponent,
    AgencyAddWorkerComponent,
    AgencyClientDetailsComponent,
    AgencyJobsComponent,
    AgencyJobsWorkComponent,
    AgencyObjectDetailsComponent,
    AgencyWorkersComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
