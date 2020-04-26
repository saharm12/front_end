import { NgModule } from '@angular/core';
import { MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatInputModule, MatPaginatorModule ,MatTableModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import { LaureatComponent } from './laureat/laureat.component';
import {JuryListComponent} from './jury-list/jury-list.component';
import { EditjuryComponent } from './editjury/editjury.component';
import {AddspeakerComponent } from 'app/components/addspeaker/addspeaker.component';
import {EditSpeakerComponent} from './edit-speaker/edit-speaker.component';

@NgModule({
  imports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatPaginatorModule,
    MatPaginatorModule,
    MatDialogModule,
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
  entryComponents:[JuryListComponent,EditjuryComponent,AddspeakerComponent,EditSpeakerComponent ]
})

export class MaterialModule {}