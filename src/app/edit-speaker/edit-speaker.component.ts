import { Component, OnInit, Inject,ViewChild } from '@angular/core';
import { MatDialogRef} from '@angular/material';
import {MatSnackBar} from'@angular/material';
import { NgForm } from '@angular/forms'
import {  FileUploader ,FileUploaderOptions } from 'ng2-file-upload';
import { HttpClient } from '@angular/common/http';

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
public uploader:FileUploader ;
imageURL="";
uploadedFile:File ;
constructor(@Inject(MAT_DIALOG_DATA) public data: any,private http:HttpClient, private snackBar : MatSnackBar,public dialogbox: MatDialogRef<EditSpeakerComponent>, private speakersservices:SpeakersService) 
{ }
@ViewChild(NgForm) ngForm: NgForm;

  ngOnInit() {
    console.log(this.data)
    let user = this.data.info ;
    console.log(user);
    this.speakerModel = Object.assign({},user);
    console.log("form ",this.speakerModel);

  }

resetForm(){
  this.onClose();
}

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

fileChange(element) {
  this.uploadedFile = element.target.files[0];
}
ModifierSpeak(){
  let data = new FormData();
data.append('userfile',this.uploadedFile);

//data.append('nom_fichier',this.speakerModel.imageURL);

  this.http.put('http://localhost:3000/speaker/modifiers/:id_speakers',data ).subscribe(data=>{
  let result:any =data; 
    console.log(result);
    if(result)
    { 
       
      console.log("ok")
      
    }
  })

  //this.uploader.uploadAll();

  //console.log('modified speaker',this.speakerModel)
  //this.speakersservices.putspeak(this.speakerModel).subscribe(data => {
    //  let result : any = data; 
    //  if(result) 
     // {
      //  this.snackBar.open("Modification bien enregistrer ",'OK', {
       //   duration: 7000,
        //  panelClass: ['green-snackbar']
        //});    
      //}
   // })
}
 

}