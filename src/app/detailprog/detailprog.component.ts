import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';  
import { ProgrammeService   } from 'app/services/programme.service';
import {MatDialog , MatDialogConfig,MatSort, MatTableDataSource} from "@angular/material"
import {  EditprogComponent } from '../editprog/editprog.component';


@Component({
  selector: 'app-detailprog',
  templateUrl: './detailprog.component.html',
  styleUrls: ['./detailprog.component.scss'],
})

export class DetailprogComponent implements OnInit {
  date_retenir:any;
  details_programme:any;
  res: any;  
  programmes=[];  

  constructor( private dialog: MatDialog ,private route: ActivatedRoute,private progService:ProgrammeService) { }

  ngOnInit() {
    let Id = this.route.snapshot.queryParams["Id"]  ;
    //this.GetcontentById(Id);  
    this.Getcontent(Id);
  }

  GetcontentById(Id : number)  

  {   this.progService.GetprogByid(Id).subscribe((data: any)=>{  
    
           this.res=data;  
    
           this.date_retenir=this.res.date_retenir 
   
           this.details_programme=this.res.details_programme 
    
           console.log(this.res);  
   
        });  
    
      

}


Getcontent(id:number){
  this.progService.GetprogByid(id).subscribe(data=>{
    let result:any = data; 
    console.log(result.programme); 
    this.programmes= result.programme; 
  })
}
update(programmes){
  const dialogConfig = new MatDialogConfig();
   dialogConfig.disableClose =  true;
   dialogConfig.autoFocus = true;
   dialogConfig.width = "60%";
   dialogConfig.data={info:programmes}
   this.dialog.open(EditprogComponent, dialogConfig)
  }
   
}
