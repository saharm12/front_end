import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatDialog , MatDialogConfig,MatSort, MatTableDataSource,MatDialogRef} from "@angular/material";
import {partenaireService} from  '../services/partenaire.service'
import { AddpartenaireComponent} from 'app/addpartenaire/addpartenaire.component';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-partenaire',
  templateUrl: './partenaire.component.html',
  styleUrls: ['./partenaire.component.scss']
})
export class PartenaireComponent implements OnInit {
  part= []; 
  base_url="http://localhost:3000"
 imageUrl = null;

  constructor(private http:HttpClient ,private partService:partenaireService,private dialog: MatDialog) { }

  ngOnInit() {
    this.getpartenaire(); 
  }
 
  getpartenaire()
  { 
      
      this.partService.getpartenaire().subscribe
      (data=>{
      

        let result:any = data; 
        console.log(result.partenaires); 
       

        this.part = result.partenaires; 
        

      })
    
  }
  OpenNewSponsors(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose =  true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(AddpartenaireComponent, dialogConfig).afterClosed().subscribe(result => {
      this.getpartenaire();
    });
    
  }

  Supprimer(id) 
{
  Swal.fire({
    title:'Supprimer',
    text:'Voulez vous supprimer ce partenaire?', 
    confirmButtonText:'Oui',
    cancelButtonText:'Non',
    showCancelButton:true, 
    type:'warning'
    
    
  }).then(result=>{
   if(result.value)
    {
       this.partService.deletpartenaire(id).subscribe(data=>{
    let result :any = data; 
    console.log(result); 
    if(result)
   {
     this.getpartenaire(); 
    }
  })
    }
 })}

}
