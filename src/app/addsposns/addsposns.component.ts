import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material';
import {  FileUploader ,FileUploaderOptions } from 'ng2-file-upload';
import { FormBuilder, FormGroup ,FormControl, Validators} from "@angular/forms";
import {CategorieSerService} from 'app/services/categorie-ser.service';

@Component({
  selector: 'app-addsposns',
  templateUrl: './addsposns.component.html',
  styleUrls: ['./addsposns.component.scss']
})
export class AddsposnsComponent implements OnInit {
  public uploader:FileUploader ;
  imageURL="";
  constructor( public dialogbox: MatDialogRef<AddsposnsComponent> , private service: CategorieSerService) {
    const authHeader: Array<{
      name: string;
      value: string;
  }> = [];
  
  let token = localStorage.getItem('token');
  authHeader.push({name: 'x-access-token', value: token});
  const uploadOptions = {headers : authHeader};
  //adding uploader service url
  this.uploader = new FileUploader({ url: 'http://localhost:3000/sponsors/upload',itemAlias: 'photo'});
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
  }
  uploadFile(event) {
    if (event.target.files.length > 0) {

     const file = event.target.files[0];

      this.myForm.patchValue({

        fileSource: file

      });

  }}

  onClose(){
    this.dialogbox.close();
  }
  addsponsors(){
    //const formData = new FormData();
   // formData.append('avatar', this.myForm.get('image').value);
   this.uploader.uploadAll();
    this.service.Postspons(this.imageURL).subscribe(data=>{
      let result :any = data; 
      if(result)
      { 
        this.onClose();
        console.log("ok")
        
      }
    })
   }
}
