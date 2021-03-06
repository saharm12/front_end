import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { CandidatsComponent } from 'app/candidats/candidats.component';
import { SpeakerComponent } from 'app/speaker/speaker.component';
import { JuryComponent } from 'app/jury/jury.component';
import { LaureatComponent } from 'app/laureat/laureat.component';
import { JuryListComponent } from 'app/jury-list/jury-list.component';
import {ProgrammeComponent} from '../../programme/programme.component';
import {DetailprogComponent} from '../../detailprog/detailprog.component';
import { DocumentComponent } from './document/document.component';
import { EnqueteComponent } from './enquete/enquete.component';
import { CategorieComponent } from './categorie/categorie.component';
import { PartenaireComponent} from '../../partenaire/partenaire.component'
export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    {path:'candidats' ,component:CandidatsComponent},
    {path:'speaker' , component:SpeakerComponent},
 {path:'laureat' , component:LaureatComponent},
   
    {path:'jury' , component:JuryComponent},
    {path:'jury-list' , component:JuryListComponent},
    {path: 'programme', component:ProgrammeComponent},
    {path:'Details', component:DetailprogComponent},
    {path:'Document', component:DocumentComponent},
    {path:'enquete' , component:EnqueteComponent},
    {path:'categorie',component:CategorieComponent},
    {path:'partenaires',component:PartenaireComponent},

   

];
