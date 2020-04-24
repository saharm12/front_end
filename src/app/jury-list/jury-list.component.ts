import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material';
import { FormBuilder } from '@angular/forms';
import { JuryService  } from 'app/services/jury.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Jury} from './jury-list.model'
import { Validators } from '@angular/forms';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-jury-list',
  templateUrl: './jury-list.component.html',
  styleUrls: ['./jury-list.component.scss']
})
export class JuryListComponent implements OnInit {
  juryModel :Jury;
  jurys=[];

  constructor( private http:HttpClient ,private juryService:JuryService ,public dialogbox: MatDialogRef<JuryListComponent> , fb: FormBuilder) 
{ this.juryModel = new Jury(); }

  ngOnInit() {
  }

  
  

  onClose(){
    this.dialogbox.close();
    
  
  }

  onSubmit(id){
    this.juryService.Postjury(this.juryModel.nom_jury, this.juryModel.prenom_jury, this.juryModel.profil_jury, this.juryModel.pays).subscribe(data=>{
      let result :any = data; 
      if(result)
      {
        
        alert("Jury Ajouter avec succees");
      }
      
    })
   
  }
  
}
