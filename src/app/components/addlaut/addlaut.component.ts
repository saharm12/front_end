import { Component, OnInit, ElementRef,ViewChild} from '@angular/core';
import { MatDialogRef} from '@angular/material';
import { FormBuilder, FormGroup ,FormControl, Validators} from "@angular/forms";
import {LaureatService} from 'app/services/laureat.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import{Laureat} from 'app/laureat/laureat.model';
import {  FileUploader ,FileUploaderOptions } from 'ng2-file-upload';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-addlaut',
  templateUrl: './addlaut.component.html',
  styleUrls: ['./addlaut.component.scss']
})
export class AddlautComponent implements OnInit {
  form: FormGroup;
  progress: number = 0;
laureatModel : Laureat;
//creation du uploader
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
constructor(private toastr: ToastrService,private laureatservice:LaureatService
,public dialogbox: MatDialogRef<AddlautComponent>, public fb: FormBuilder,) {
  const authHeader: Array<{
    name: string;
    value: string;
}> = [];

let token = localStorage.getItem('token');
authHeader.push({name: 'x-access-token', value: token});
const uploadOptions = {headers : authHeader};
//adding uploader service url
this.uploader = new FileUploader({ url: 'http://localhost:3000/laureats/upload',itemAlias: 'photo'});
this.uploader.setOptions(uploadOptions);
  

 }

 myForm = new FormGroup({  
  image: new FormControl('', [Validators.required]),
  categorie: new FormControl('', [Validators.required]),


 });

 get  categorie(){
  return this.myForm.get('categorie');
  }
  ngOnInit() { 
    this.uploader.onAfterAddingFile = (file) => {
      this.imageURL="/uploads/"+file.file.name;
      file.withCredentials = false; 
     };
     /*this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
    };*/
    }


  submitUser() {
    
  }
  showSuccess()
  {this.toastr.success('laureats a été ajouté avec succés')}
  showerror()
  {this.toastr.error('no file selected')}

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
  validateAllFormFields(formGroup: FormGroup) {
  Object.keys(formGroup.controls).forEach(field => {
    console.log(field);
    const control = formGroup.get(field);
    if (control instanceof FormControl) {
      control.markAsTouched({ onlySelf: true });
    } else if (control instanceof FormGroup) {
      this.validateAllFormFields(control);
    }
  });
}
  addLaureat(){
    //const formData = new FormData();
   // formData.append('avatar', this.myForm.get('image').value);
   if(this.imageURL.length == 0){
    this.showerror();
   }else{
     if(this.myForm.invalid){
          this.validateAllFormFields(this.myForm);
     }else{
   
   this.uploader.uploadAll();
    this.laureatservice.PostLaureat(this.imageURL, this.myForm.controls['categorie'].value ).subscribe(data=>{
      let result :any = data; 
      if(result)
      { this.showSuccess();
        this.onClose();
        console.log("ok")
        
      }
    })
   }
  }}
}