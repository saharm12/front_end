import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material';
import {Laureat} from 'app/laureat/laureat.model';
import {LaureatService} from 'app/services/laureat.service';
import {MatSnackBar} from'@angular/material';

@Component({
  selector: 'app-addlaureat',
  templateUrl: './addlaureat.component.html',
  styleUrls: ['./addlaureat.component.scss']
})
export class AddlaureatComponent implements OnInit {
laureatModel : Laureat;
  constructor( private snackBar : MatSnackBar,public dialogbox: MatDialogRef<AddlaureatComponent> ,private laureatservice:LaureatService ) {
    this.laureatModel = new Laureat();

   }
  
  ngOnInit() {
  }
  onSelectedFile(event){
    if(event.target.files.length > 0){
      const file =event.target.files[0];
      //this.addblogform.get('image').setValue(file);
    }
  }
 
  Ajouter(){
    this.laureatservice.PostLaureat(this.laureatModel.image).subscribe(data=>{
      let result :any = data; 
      if(result)
      {
        this.snackBar.open("Speaker Ajouter avec succées",'OK', {
          duration: 7000,
          panelClass: ['green-snackbar']
        });    
      }
      
    })
   
  }

  onClose(){
    this.dialogbox.close();
   
  }
  
}
