import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  FileUploader ,FileUploaderOptions } from 'ng2-file-upload';
import { FormBuilder, FormGroup ,FormControl, Validators} from "@angular/forms";
import {MatDialog , MatDialogConfig,MatSort, MatTableDataSource,MatDialogRef} from "@angular/material"
import { AddsposnsComponent} from 'app/addsposns/addsposns.component'
import {CategorieSerService} from 'app/services/categorie-ser.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {
  sponsors= []; 
  base_url="http://localhost:3000"
 imageUrl = null;

  constructor(private http:HttpClient ,private categorie:CategorieSerService,private dialog: MatDialog ) { 
    
 

  }
  
  ngOnInit() {
    

    this.getsponsors();
  }



  
  
  getsponsors()
  { 
      
      this.categorie.getsponsors().subscribe
      (data=>{
      

        let result:any = data; 
        console.log(result.sponsors); 
       

        this.sponsors = result.sponsors; 
        

      })
    
  }
  OpenNewSponsors(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose =  true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(AddsposnsComponent, dialogConfig).afterClosed().subscribe(result => {
      this.getsponsors();
    });
    
  }

  Supprimer(id) 
{
  Swal.fire({
    title:'Supprimer',
    text:'Voulez vous supprimer cet sponsors?', 
    confirmButtonText:'Oui',
    cancelButtonText:'Non',
    showCancelButton:true, 
    type:'warning'
    
    
  }).then(result=>{
   if(result.value)
    {
       this.categorie.deletspons(id).subscribe(data=>{
    let result :any = data; 
    console.log(result); 
    if(result)
   {
     this.getsponsors(); 
    }
  })
    }
 })}

}
