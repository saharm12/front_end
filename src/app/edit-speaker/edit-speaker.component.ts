import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef} from '@angular/material';

import { Speaker } from 'app/components/addspeaker/addspeaker.model';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {SpeakersService  } from 'app/services/speakers.service';

@Component({
  selector: 'app-edit-speaker',
  templateUrl: './edit-speaker.component.html',
  styleUrls: ['./edit-speaker.component.scss']
})
export class EditSpeakerComponent implements OnInit {
speakerModel: Speaker ;

speake= []; 
constructor(@Inject(MAT_DIALOG_DATA) public data: any ,public dialogbox: MatDialogRef<EditSpeakerComponent>, private speakersservices:SpeakersService) 
{ }

  ngOnInit() {
    console.log(this.data)
    let user = this.data.info ;
    console.log(user);
    this.speakerModel = Object.assign({},user);
    console.log("form ",this.speakerModel);
  }

resetForm(){}

onClose(){
  //console.log("form en close ",this.juryModel);
  this.dialogbox.close();
  //this.ngOnInit();

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


UpdateNewSpeak(){
  console.log('modified speaker',this.speakerModel)
  this.speakersservices.ModifierSpeakers(this.speakerModel).subscribe(data => {
      let result : any = data; 
      if(result)
      { 
        console.log("ok");
      }
    })
}

}
