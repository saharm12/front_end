import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog , MatDialogConfig,MatSort, MatTableDataSource} from "@angular/material"
import { LaureatComponent } from 'app/laureat/laureat.component';
import { JuryListComponent } from 'app/jury-list/jury-list.component';
import { JuryService  } from 'app/services/jury.service';
import { EditjuryComponent } from 'app/editjury/editjury.component';
import { Jury} from 'app/jury-list/jury-list.model';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-jury',
  templateUrl: './jury.component.html',
  styleUrls: ['./jury.component.scss']
})
export class JuryComponent implements OnInit {
  jurys=[];
  juryModel :Jury;
  p: number = 1;
  base_url="http://localhost:3000"
 imageUrl = null;

  constructor( private juryService:JuryService ,private dialog: MatDialog ) { 
    this.juryModel = new Jury();
   
  
  }
  

  ngOnInit() {
    this.getjury(); 

    
    
  }
 onCreate(){
   
   const dialogConfig = new MatDialogConfig();
   dialogConfig.disableClose =  true;
   dialogConfig.autoFocus = true;
   dialogConfig.width = "60%";
   this.dialog.open(JuryListComponent, dialogConfig).afterClosed().subscribe(result => {
    this.getjury();
  });
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




Supp(id)
{
  Swal.fire({
    title:'Supprimer',
    text:'Voulez vous supprimer cet jury ?', 
    confirmButtonText:'Oui',
    cancelButtonText:'Non',
    showCancelButton:true, 
    type:'warning'
    
    
  }).then(result=>{
    if(result.value)
    {
        this.juryService.SuppJu(id).subscribe(data=>{
    let result :any = data; 
    console.log(result); 

   
    if(result)
    {
     this.getjury(); 
    }
  })
    }
  })

  
}
open(jury){
  const dialogConfig = new MatDialogConfig();

   
   dialogConfig.disableClose =  true;
   dialogConfig.autoFocus = true;
   dialogConfig.width = "60%";
   dialogConfig.data={info:jury}
   this.dialog.open(EditjuryComponent, dialogConfig).afterClosed().subscribe(result => {
    this.getjury();
  });
   
}

}
