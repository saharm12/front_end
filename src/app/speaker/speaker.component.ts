import { Component, OnInit } from '@angular/core';
import {MatDialog , MatDialogConfig,MatSort, MatTableDataSource} from "@angular/material"
import {AddspeakerComponent } from 'app/components/addspeaker/addspeaker.component';
import {SpeakersService  } from 'app/services/speakers.service';
import {EditSpeakerComponent} from '../edit-speaker/edit-speaker.component';
import { Speaker } from 'app/components/addspeaker/addspeaker.model';

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.scss']
})
export class SpeakerComponent implements OnInit {
  speake= []; 

  constructor(private speakersservices:SpeakersService,private dialog: MatDialog ) {

   }

  ngOnInit() {
    this.getSpeak()
  }

  OpenNewSpeaker(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose =  true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(AddspeakerComponent, dialogConfig);
  }
  getSpeak()
  { 
    {
      this.speakersservices.getSpeaker().subscribe(data=>{
        let result:any = data; 
        console.log(result.speakers); 
        this.speake = result.speakers; 
      })
  }
} 
Supp(id){
  console.log('id', id);
  this.speakersservices.SuppSpeakers(id).subscribe(data=>{
    let result :any = data; 
    if(result)
    { 
      this.speake = this.speake.filter(u => u.id_speakers !== id );
    }
  })
}

openEdit(speaker){
  const dialogConfig = new MatDialogConfig();
   dialogConfig.disableClose =  true;
   dialogConfig.autoFocus = true;
   dialogConfig.width = "60%";
   dialogConfig.data={info:speaker}
   this.dialog.open(EditSpeakerComponent, dialogConfig);
}
}
