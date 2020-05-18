import { Component, OnInit, ElementRef,ViewChild} from '@angular/core';
import { MatDialogRef} from '@angular/material';
import { FormBuilder, FormGroup ,FormControl, Validators} from "@angular/forms";
import {LaureatService} from 'app/services/laureat.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import{Laureat} from 'app/laureat/laureat.model';
import {  FileUploader ,FileUploaderOptions } from 'ng2-file-upload';
@Component({
  selector: 'app-addlaut',
  templateUrl: './addlaut.component.html',
  styleUrls: ['./addlaut.component.scss']
})
export class AddlautComponent implements OnInit {
  form: FormGroup;
  progress: number = 0;
laureatModel : Laureat;
public uploader:FileUploader ;
imageURL="";
//listecategorie:any = ['best web site','best app mobile','best e-shop']
//formm = new FormGroup({
 // website: new FormControl('', Validators.required)
//);

//get f(){
 // return this.form.controls;
//}

submit(){
  console.log(this.form.value);
}
constructor(private laureatservice:LaureatService
,public dialogbox: MatDialogRef<AddlautComponent>, public fb: FormBuilder,) {
  const authHeader: Array<{
    name: string;
    value: string;
}> = [];


const currentUser = JSON.parse(localStorage.getItem('currentUser'));

if (currentUser && currentUser.token) {
  console.log("token",currentUser.token);
    //authHeader.push({name: 'Authorization', value: 'Bearer ' + currentUser.token});
}
let token = localStorage.getItem('token');
console.log("token",token);
 authHeader.push({name: 'x-access-token', value: token});
const uploadOptions = {headers : authHeader};

this.uploader = new FileUploader({ url: 'http://localhost:3000/laureats/upload',itemAlias: 'photo'});
this.uploader.setOptions(uploadOptions);
  

 }

 myForm = new FormGroup({  
  image: new FormControl('', [Validators.required]),
  categorie: new FormControl('', [Validators.required]),


 });
  ngOnInit() { 
    this.uploader.onAfterAddingFile = (file) => {
      this.imageURL="/uploads/"+file.file.name;
    
      file.withCredentials = false; 
     };
     this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      //console.log('ImageUpload:uploaded:', item, status, response);
    };
    }


  submitUser() {
    
  }

  uploadFile(event) {
    if (event.target.files.length > 0) {

     const file = event.target.files[0];

      this.myForm.patchValue({

        fileSource: file

      });

  }}
  
  //}

  onClose(){
    this.dialogbox.close();
   
  }
  addLaureat(){
    //const formData = new FormData();
   // formData.append('avatar', this.myForm.get('image').value);
   this.uploader.uploadAll();
    this.laureatservice.PostLaureat(this.imageURL ).subscribe(data=>{
      let result :any = data; 
      if(result)
      { 
        this.onClose();
        console.log("ok")
        
      }
    })
   }
   
}