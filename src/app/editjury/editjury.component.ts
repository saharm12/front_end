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
    this.juryModel = new Jury();
  }

  ngOnInit() {
    console.log(this.data)
    let user = this.data.info ;
    console.log(user);
    this.juryModel = Object.assign({},user);
    console.log("form ",this.juryModel);
   
  
  }
  resetForm(){}
  onClose(){
    console.log("form en close ",this.juryModel);
    this.dialogbox.close();
  
  }
  onSubmit(id){
    console.log('id', id);
  this.juryService.ModifJu(id).subscribe(data=>{
    let result :any = data; 
    if(result)
    {
      console.log("OK");
    }
  })
  }

}
