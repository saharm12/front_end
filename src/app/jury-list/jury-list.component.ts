import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material';
import { FormBuilder } from '@angular/forms';
import { JuryService  } from 'app/services/jury.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Jury} from './jury-list.model'

@Component({
  selector: 'app-jury-list',
  templateUrl: './jury-list.component.html',
  styleUrls: ['./jury-list.component.scss']
})
export class JuryListComponent implements OnInit {
  juryModel :Jury;
  constructor( private http:HttpClient ,private juryService:JuryService ,public dialogbox: MatDialogRef<JuryListComponent> , fb: FormBuilder) 
{ this.juryModel = new Jury(); }

  ngOnInit() {
  }


  resetForm(){
    
  }

  onClose(){
    this.dialogbox.close();
  
  }

  onSubmit(){
    this.juryService.Postjury(this.juryModel.nom_jury, this.juryModel.prenom_jury, this.juryModel.profil_jury, this.juryModel.pays).subscribe(data=>{
      let result :any = data; 
      if(result)
      {
        alert("jury Ajouter avec succes");
        console.log("ok");
      }
    })
   
  }
  
}
