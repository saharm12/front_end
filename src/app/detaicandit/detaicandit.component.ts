import { Component, OnInit,Inject } from '@angular/core';
import { CandidatService } from 'app/services/candidats.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-detaicandit',
  templateUrl: './detaicandit.component.html',
  styleUrls: ['./detaicandit.component.scss']
})
export class DetaicanditComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogbox: MatDialogRef<DetaicanditComponent>, private candiService:CandidatService) { }
candidat:any;
id:number;
  ngOnInit() {
    this.candidat = this.data.info ;
   console.log("test ",this.candidat);
  }
  onClose(){
    this.dialogbox.close();
  
  }
}
