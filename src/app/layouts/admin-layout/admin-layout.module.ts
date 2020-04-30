import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { MyDatePickerModule } from 'mydatepicker';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule} from 'ngx-pagination';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
import { MatSortModule  } from '@angular/material';
import { SpeakerComponent } from '../../speaker/speaker.component';
import { LaureatComponent } from '../../laureat/laureat.component';
import { JuryComponent } from '../../jury/jury.component';
import { JuryListComponent} from '../../jury-list/jury-list.component';
import {EditjuryComponent} from '../../editjury/editjury.component';
import {AddspeakerComponent } from 'app/components/addspeaker/addspeaker.component';
import {EditSpeakerComponent} from '../../edit-speaker/edit-speaker.component';
import {AddlaureatComponent} from 'app/components/addlaureat/addlaureat.component'

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,

} from '@angular/material';
import { MaterialModule } from 'app/material.module';
import { CandidatsComponent } from 'app/candidats/candidats.component';
@NgModule({
  imports: [
    CommonModule,
  
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatSortModule,
    MatInputModule,
    NgxPaginationModule,
    MatSelectModule,
    MatPaginatorModule ,
    MatTableModule,
    MatTooltipModule,
    Ng2SearchPipeModule,
    MaterialModule, 
    MyDatePickerModule, 
    FormsModule,
    ReactiveFormsModule,
   
  ],
  declarations: [
    
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    CandidatsComponent,
    SpeakerComponent,
    JuryComponent,
    LaureatComponent,
    JuryListComponent,
    EditjuryComponent,
    AddspeakerComponent,
    EditSpeakerComponent,
    AddlaureatComponent,
    
  ]
})

export class AdminLayoutModule {}
