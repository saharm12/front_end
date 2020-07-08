import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material';
import {  FileUploader ,FileUploaderOptions } from 'ng2-file-upload';
import { FormBuilder, FormGroup ,FormControl, Validators} from "@angular/forms";
import {partenaireService} from 'app/services/partenaire.service';

@Component({
  selector: 'app-addpartenaire',
  templateUrl: './addpartenaire.component.html',
  styleUrls: ['./addpartenaire.component.scss']
})
export class AddpartenaireComponent implements OnInit {
  public uploader:FileUploader ;
  imageURL="";
  constructor(public dialogbox: MatDialogRef<AddpartenaireComponent> , private service: partenaireService) { 
    const authHeader: Array<{
      name: string;
      value: string;
  }> = [];
  let token = localStorage.getItem('token');
  authHeader.push({name: 'x-access-token', value: token});
  const uploadOptions = {headers : authHeader};
  //adding uploader service url
  this.uploader = new FileUploader({ url:'http://localhost:3000/partenaire/upload',itemAlias: 'photo'});
  this.uploader.setOptions(uploadOptions);
    
  
   }
   myForm = new FormGroup({  
    image: new FormControl('', [Validators.required]),
  
  
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
  addpartenaire(){
    //const formData = new FormData();
   // formData.append('avatar', this.myForm.get('image').value);
   this.uploader.uploadAll();
    this.service.Postpartenaire(this.imageURL).subscribe(data=>{
      let result :any = data; 
      if(result)
      { 
        this.onClose();
        console.log("ok")
        
      }
    })
   }



}
