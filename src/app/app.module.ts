import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'; 

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import {NgxQRCodeModule} from 'ngx-qrcode3' ; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule } from '@angular/material';
import { EvenementComponent } from './evenement/evenement.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MyDatePickerModule } from 'mydatepicker';
import { MaterialModule } from './material.module';
import { AuthService } from './services/auth.service';
import { CandidatService } from './services/candidats.service';
import { ExposantService } from './services/exposants.service';
import { ParticipantService } from './services/participants.service';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';
import {LaureatService} from './services/laureat.service';

@NgModule({
  imports: [
   ConfirmationPopoverModule.forRoot({
     confirmButtonType: 'danger'
   }),
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    
    AppRoutingModule,
    NgxQRCodeModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'

    }),
    
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    InscriptionComponent,
    EvenementComponent,

  ],
  providers: [LaureatService,AuthService,CandidatService,ExposantService,ParticipantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
