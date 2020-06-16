import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material';
import { JuryService  } from 'app/services/jury.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Jury} from './jury-list.model'
import {ToastrService} from 'ngx-toastr'
import {MatSnackBar} from'@angular/material';
import {  ViewChild} from '@angular/core';
import {  FileUploader ,FileUploaderOptions } from 'ng2-file-upload';
import { FormBuilder, FormGroup ,FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-jury-list',
  templateUrl: './jury-list.component.html',
  styleUrls: ['./jury-list.component.scss']
})
export class JuryListComponent implements OnInit {
  juryModel :Jury;
  jurys=[];
  public uploader:FileUploader ;
imageURL="";
  constructor( private toastr: ToastrService,private http:HttpClient ,private snackBar : MatSnackBar,private juryService:JuryService ,public dialogbox: MatDialogRef<JuryListComponent> , fb: FormBuilder) 
{ this.juryModel = new Jury();
  const authHeader: Array<{
    name: string;
    value: string;
}> = [];

let token = localStorage.getItem('token');
authHeader.push({name: 'x-access-token', value: token});
const uploadOptions = {headers : authHeader};
//adding uploader service url
this.uploader = new FileUploader({ url: 'http://localhost:3000/jurie/upload',itemAlias: 'photo'});
this.uploader.setOptions(uploadOptions);
  

 }

 myForm = new FormGroup({  
  image: new FormControl('', [Validators.required]),
  nom_jury: new FormControl('', [Validators.required, Validators.pattern("[a-z.'-]+"),Validators.minLength(3)]),
  prenom_jury: new FormControl('', [Validators.required,Validators.pattern("[a-z.'-]+"),Validators.minLength(3)]),
  profil_jury: new FormControl('', [Validators.required,Validators.pattern("https?://.+")]),
  pays_jury: new FormControl('', [Validators.required,Validators.pattern("[a-z.'-]+"),Validators.minLength(3)]),






 }); 
 get  nom_jury(){
  return this.myForm.get('nom_jury');
  }
  get prenom_jury(){
    return  this.myForm.get('prenom_jury');
  }
  get profil_jury(){
    return  this.myForm.get('profil_jury');
  }
  get   pays_jury(){
    return  this.myForm.get('pays_jury');
  }
  
  Annuler(){
    this.dialogbox.close();
  }
  showSucess(){
    this.toastr.success('Ajout effectué  avec succés')}
@ViewChild(NgForm) ngForm: NgForm;

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => {
      this.imageURL="/uploads/"+file.file.name;
      file.withCredentials = false; 
     };}
  
  submitUser(){}
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

  
      
    
    addjury(){
      this.uploader.uploadAll();
      this.juryService.Postjury(this.imageURL,this.myForm.controls['nom_jury'].value , this.myForm.controls['prenom_jury'].value , this.myForm.controls['profil_jury'].value , this.myForm.controls['pays_jury'].value , ).subscribe(data=>{
        let result :any = data; 
        if(result)
        { 
         this.showSucess();
          this.onClose();
          console.log("ok")
          
        }
      })
      
      
     }

    
   
    
   
  
  resetForm(){
    this.ngForm.resetForm();
  }
}
