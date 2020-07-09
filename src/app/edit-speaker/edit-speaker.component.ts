import { Component, OnInit, Inject,ViewChild } from '@angular/core';
import { MatDialogRef} from '@angular/material';
import {MatSnackBar} from'@angular/material';
import { NgForm } from '@angular/forms'
import {  FileUploader ,FileUploaderOptions } from 'ng2-file-upload';
import { HttpClient } from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
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
constructor(@Inject(MAT_DIALOG_DATA) public data: any,private toastr: ToastrService,private http:HttpClient, private snackBar : MatSnackBar,public dialogbox: MatDialogRef<EditSpeakerComponent>, private speakersservices:SpeakersService) 
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
showErr(){
  this.toastr.error('Linkedin deja existant')}

showSucess(){
  this.toastr.success('Modification correctement effectué')}
fileChange(element) {
  this.uploadedFile = element.target.files[0];
}


submitted=false;
ModifierSpeak(){

 // this.submitted = true;

  let data = new FormData();

data.append('nom_speakers',this.speakerModel.nom_speakers);
data.append('prenom_speakers',this.speakerModel.prenom_speakers);
data.append('profil_speakers',this.speakerModel.profil_speakers);
data.append('pays',this.speakerModel.pays);
console.log("file name",this.uploadedFile)
this.http.post('http://localhost:3000/speaker/CheckputLinkedInNotTaken/'+this.speakerModel.id_speakers,{
  'profil_speakers': this.speakerModel.profil_speakers,
   })
 .subscribe((res:any)=>{
  console.log(res.linkedInNotTaken)

  if(!res.linkedInNotTaken)
  { 
   this.showErr();
  }else{




 if (this.uploadedFile){
  console.log("file")
  data.append('userfile',this.uploadedFile);
  this.imageURL=this.uploadedFile.name;
  data.append('imageURL',"/uploads/"+this.imageURL);

 }else{
  console.log("no file",this.speakerModel)
  this.imageURL=this.speakerModel.image;
  data.append('imageURL',this.imageURL);
 }
 console.log("image", this.imageURL)


  this.http.put('http://localhost:3000/speaker/modifiers/'+this.speakerModel.id_speakers,data ).subscribe(data=>{
  let result:any =data; 
    console.log(result);
    if(result)
    { this.showSucess();
      this.onClose();
       
      console.log("ok")
      
    }
  })
}
})
}
}

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
