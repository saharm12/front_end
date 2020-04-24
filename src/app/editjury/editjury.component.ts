import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef} from '@angular/material';
import { JuryService  } from 'app/services/jury.service';
import { Jury} from 'app/jury-list/jury-list.model';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-editjury',
  templateUrl: './editjury.component.html',
  styleUrls: ['./editjury.component.scss']
})
export class EditjuryComponent implements OnInit {

  juryModel :Jury;
  jurys=[];
  

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private juryService:JuryService, public dialogbox: MatDialogRef<EditjuryComponent>  ) { 
    
  }

  ngOnInit() {
    console.log(this.data)
    let user = this.data.info ;
    console.log(user);
    this.juryModel = Object.assign({},user);
    console.log("form ",this.juryModel);
    
    //this.editForm = this.formBuilder.group({
      //id: [''],
     // username: ['', Validators.required],
     // firstName: ['', Validators.required],
     // lastName: ['', Validators.required],
     // pays: ['', Validators.required],
    //});
  // this.getjury();

  }
  resetForm(){}
  
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
          console.log("ok");
        }
      })
  }
}
