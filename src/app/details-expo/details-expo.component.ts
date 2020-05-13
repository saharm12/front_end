import { Component, OnInit ,Inject} from '@angular/core';
import { MatDialogRef} from '@angular/material';
import { ExposantService } from 'app/services/exposants.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-details-expo',
  templateUrl: './details-expo.component.html',
  styleUrls: ['./details-expo.component.scss']
})
export class DetailsExpoComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: any, public dialogbox: MatDialogRef<DetailsExpoComponent>, private expoService:ExposantService) { }
  exposant:any; 
  id:number;
  ngOnInit() {
   // this.getExposants();
   this.exposant = this.data.info ;
   console.log("test ",this.exposant);
  // this.exposants = Object.assign({},expo);
    
  }
  onClose(){
    this.dialogbox.close();
  
  }


}
