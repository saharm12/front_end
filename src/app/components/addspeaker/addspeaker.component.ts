import { Component, OnInit, ViewChild } from '@angular/core';
import {Speaker} from './addspeaker.model'
import { HttpClient } from '@angular/common/http';
import { MatDialogRef} from '@angular/material';
import {SpeakersService  } from 'app/services/speakers.service';
import {MatSnackBar} from'@angular/material';
import {NgForm} from '@angular/forms';
import { FormBuilder, FormGroup ,FormControl, Validators} from "@angular/forms";
import {  FileUploader ,FileUploaderOptions } from 'ng2-file-upload';
@Component({
  selector: 'app-addspeaker',
  templateUrl: './addspeaker.component.html',
  styleUrls: ['./addspeaker.component.scss']
})
export class AddspeakerComponent implements OnInit {
speakermodel : Speaker;
speake= []; 
public uploader:FileUploader ;
imageURL="";


  constructor(private snackBar : MatSnackBar,private http:HttpClient, private speakersservices:SpeakersService,public dialogbox: MatDialogRef<AddspeakerComponent>) {
    this.speakermodel = new Speaker();
    const authHeader: Array<{
      name: string;
      value: string;
  }> = [];
  
  let token = localStorage.getItem('token');
authHeader.push({name: 'x-access-token', value: token});
const uploadOptions = {headers : authHeader};
//adding uploader service url
this.uploader = new FileUploader({ url: 'http://localhost:3000/speaker/upload',itemAlias: 'photo'});
this.uploader.setOptions(uploadOptions);
  

 }
myForm = new FormGroup({  
   image: new FormControl('', [Validators.required]),
    nom_speakers: new FormControl('', [Validators.required, Validators.pattern("[a-z.'-]+"),Validators.minLength(3)]),
    prenom_speakers: new FormControl('', [Validators.required,Validators.pattern("[a-z.'-]+"),Validators.minLength(3)]),
    profil_speakers: new FormControl('', [Validators.required,Validators.pattern("https?://.+")]),
    pays_speakers: new FormControl('', [Validators.required,Validators.pattern("[a-z.'-]+"),Validators.minLength(3)]),
  
  
 
    
   
   }); 
   
   @ViewChild(NgForm) ngForm: NgForm;
  

get nom_speakers(){
return this.myForm.get('nom_speakers');
}
get prenom_speakers(){
  return  this.myForm.get('prenom_speakers');
}
get profil_speakers(){
  return  this.myForm.get('profil_speakers');
}
get pays_speakers(){
  return  this.myForm.get('pays_speakers');
}




  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => {
      this.imageURL="/uploads/"+file.file.name;
      file.withCredentials = false; 
     };
     /*this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
    };*/  }
  onClose(){
    this.dialogbox.close();

  
  }
  
  

  Annuler(){
    this.onClose();
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

addspeaker(){
  this.uploader.uploadAll();
  this.speakersservices.PostSpeaker(this.imageURL,this.myForm.controls['nom_speakers'].value,this.myForm.controls['prenom_speakers'].value,this.myForm.controls['profil_speakers'].value,this.myForm.controls['pays_speakers'].value ).subscribe(data=>{
    let result :any = data; 
    if(result)
    { 
      this.onClose();
      console.log("ok")
      this.snackBar.open("Speaker Ajouter avec succées",'OK', {
        duration: 3000,
        panelClass: ['green-snackbar']
      })
      
      
    }
  })
 }
resetForm(){
 this.ngForm.resetForm();
 
}

}
