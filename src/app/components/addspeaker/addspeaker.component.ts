import { Component, OnInit, ViewChild } from '@angular/core';
import {Speaker} from './addspeaker.model'
import { HttpClient } from '@angular/common/http';
import { MatDialogRef} from '@angular/material';
import {SpeakersService  } from 'app/services/speakers.service';
import {MatSnackBar} from'@angular/material';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-addspeaker',
  templateUrl: './addspeaker.component.html',
  styleUrls: ['./addspeaker.component.scss']
})
export class AddspeakerComponent implements OnInit {
speakermodel : Speaker;
speake= []; 

  constructor(private snackBar : MatSnackBar,private http:HttpClient, private speakersservices:SpeakersService,public dialogbox: MatDialogRef<AddspeakerComponent>) {
    this.speakermodel = new Speaker();
   }

   @ViewChild(NgForm) ngForm: NgForm;

  ngOnInit() {
    this.getSpeak();
  }
  onClose(){
    this.dialogbox.close();

  
  }
  
  onSubmit(){
    this.speakersservices.PostSpeaker(this.speakermodel.nom_speakers, this.speakermodel.prenom_speakers, this.speakermodel.profil_speakers, this.speakermodel.pays).subscribe(data=>{
      let result :any = data; 
      if(result)
      { 
        
        //.location.reload();
        this.snackBar.open("Speaker Ajouter avec succées",'OK', {
          duration: 3000,
          panelClass: ['green-snackbar']
        })
        
      }
      
    })

  

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
resetForm(){
 this.ngForm.resetForm();
 
}

}
