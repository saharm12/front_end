import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatDialogRef} from '@angular/material';
import { FormBuilder, FormGroup ,FormControl, Validators} from "@angular/forms";
import {LaureatService} from 'app/services/laureat.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import{Laureat} from 'app/laureat/laureat.model';

@Component({
  selector: 'app-addlaut',
  templateUrl: './addlaut.component.html',
  styleUrls: ['./addlaut.component.scss']
})
export class AddlautComponent implements OnInit {
  form: FormGroup;
  progress: number = 0;
laureatModel : Laureat;

  constructor(private laureatservice:LaureatService
,public dialogbox: MatDialogRef<AddlautComponent>, public fb: FormBuilder,) {
  
  
  

 }

 myForm = new FormGroup({  
  image: new FormControl('', [Validators.required]),


 });
  ngOnInit() { }


  submitUser() {
    
  }

  uploadFile(event) {
    if (event.target.files.length > 0) {

      const file = event.target.files[0];

      this.myForm.patchValue({

        fileSource: file

      });

    }
  
  }
 

  onClose(){
    this.dialogbox.close();
   
  }
  addLaureat(){
    //const formData = new FormData();
   // formData.append('avatar', this.myForm.get('image').value);
    this.laureatservice.PostLaureat(this.myForm.get('image').value).subscribe(data=>{
      let result :any = data; 
      if(result)
      { 
        
        console.log("ok")
        
      }
    })
  }
}