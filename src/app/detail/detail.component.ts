import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef} from '@angular/material';
import { ParticipantService } from 'app/services/participants.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
participant:any;
id:number;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogbox: MatDialogRef<DetailComponent>, private participantservice:ParticipantService) { }

  ngOnInit() {
    this.participant = this.data.info ;
   console.log("test ",this.participant);
  }
  onClose(){
    this.dialogbox.close();
  
  }
}
