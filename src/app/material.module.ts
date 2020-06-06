import { NgModule } from '@angular/core';
import { MatSnackBarModule,MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatInputModule, MatPaginatorModule ,MatTableModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import { LaureatComponent } from './laureat/laureat.component';
import {JuryListComponent} from './jury-list/jury-list.component';
import { EditjuryComponent } from './editjury/editjury.component';
import {AddspeakerComponent } from 'app/components/addspeaker/addspeaker.component';
import {EditSpeakerComponent} from './edit-speaker/edit-speaker.component';
import {AddlautComponent} from 'app/components/addlaut/addlaut.component';
import {DetailsExpoComponent} from './details-expo/details-expo.component';
import { DetailprogComponent } from './detailprog/detailprog.component';
import {  EditprogComponent } from './editprog/editprog.component';
import { DetaicanditComponent } from './detaicandit/detaicandit.component';
import { DetailComponent } from './detail/detail.component';
import { AddsposnsComponent} from 'app/addsposns/addsposns.component'

@NgModule({
  imports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatPaginatorModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSnackBarModule,
  ],
  exports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatPaginatorModule,
    MatDialogModule,
   
  ],
  providers: [ MatDatepickerModule ],
  entryComponents:[EditprogComponent, DetailComponent,DetaicanditComponent,DetailsExpoComponent,JuryListComponent,EditjuryComponent,DetailprogComponent,AddspeakerComponent,EditSpeakerComponent,AddlautComponent, AddsposnsComponent]
})

export class MaterialModule {}