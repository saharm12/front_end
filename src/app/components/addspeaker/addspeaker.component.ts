import { Component, OnInit } from '@angular/core';
import {Speaker} from './addspeaker.model'
import { HttpClient } from '@angular/common/http';
import { MatDialogRef} from '@angular/material';
import {SpeakersService  } from 'app/services/speakers.service';

@Component({
  selector: 'app-addspeaker',
  templateUrl: './addspeaker.component.html',
  styleUrls: ['./addspeaker.component.scss']
})
export class AddspeakerComponent implements OnInit {
speakermodel : Speaker;
  constructor(private http:HttpClient, private speakersservices:SpeakersService,public dialogbox: MatDialogRef<AddspeakerComponent>) {
    this.speakermodel = new Speaker();
   }

  ngOnInit() {
  }
  onClose(){
    this.dialogbox.close();
    
  
  }

  onSubmit(id){
    this.speakersservices.PostSpeaker(this.speakermodel.nom_speakers, this.speakermodel.prenom_speakers, this.speakermodel.profil_speakers, this.speakermodel.pays).subscribe(data=>{
      let result :any = data; 
      if(result)
      {
        
        alert("Speaker Ajouter avec succees");
      }
      
    })
   
  }

}
