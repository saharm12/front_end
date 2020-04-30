import { Component, OnInit,Inject,ViewChild } from '@angular/core';
import { MatDialogRef} from '@angular/material';
import { JuryService  } from 'app/services/jury.service';
import { Jury} from 'app/jury-list/jury-list.model';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatSnackBar} from'@angular/material';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-editjury',
  templateUrl: './editjury.component.html',
  styleUrls: ['./editjury.component.scss']
})
export class EditjuryComponent implements OnInit {

  juryModel :Jury;
  jurys=[];
  

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private snackBar : MatSnackBar,private juryService:JuryService, public dialogbox: MatDialogRef<EditjuryComponent>  ) { 
    
  }
  @ViewChild(NgForm) ngForm: NgForm;

  ngOnInit() {
    console.log(this.data)
    let user = this.data.info ;
    console.log(user);
    this.juryModel = Object.assign({},user);
    console.log("form ",this.juryModel);
    
    

  }
  resetForm(){
    this.onClose();

  }
  
  onClose(){
    //console.log("form en close ",this.juryModel);
    this.dialogbox.close();
    //this.ngOnInit();
  
  }
  getjury()
  { 
   {
     this.juryService.getjury().subscribe(data=>{
       let result:any = data; 
       console.log(result.membre_jury); 
       this.jurys= result.membre_jury; 
     })
 }
 } 


  Update(){
    console.log('modified jury',this.juryModel)
    this.juryService.ModifJury(this.juryModel).subscribe(data => {
        let result : any = data; 
        if(result)
        { 
          this.snackBar.open("Modification bien enregistrer",'OK', {
            duration: 7000,
            panelClass: ['green-snackbar']
          }); 
        }
      })
  }
}
