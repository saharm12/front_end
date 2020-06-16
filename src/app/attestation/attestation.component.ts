import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef} from '@angular/material';
import { HttpClient } from '@angular/common/http';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-attestation',
  templateUrl: './attestation.component.html',
  styleUrls: ['./attestation.component.scss']
})
export class AttestationComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialogbox: MatDialogRef<AttestationComponent>) {
   }

  ngOnInit() {
   
  }
  onClose(){
    this.dialogbox.close();
   
  }
}
