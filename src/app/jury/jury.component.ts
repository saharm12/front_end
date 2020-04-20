import { Component, OnInit } from '@angular/core';
import {MatDialog , MatDialogConfig,MatSort} from "@angular/material"
import { LaureatComponent } from 'app/laureat/laureat.component';
import { JuryListComponent } from 'app/jury-list/jury-list.component';
import { JuryService  } from 'app/services/jury.service';


@Component({
  selector: 'app-jury',
  templateUrl: './jury.component.html',
  styleUrls: ['./jury.component.scss']
})
export class JuryComponent implements OnInit {
  jurys=[];
  constructor(private juryService:JuryService ,private dialog: MatDialog ) { }

  ngOnInit() {
    this.getjury(); 

  }
 onCreate(){
   
   const dialogConfig = new MatDialogConfig();
   dialogConfig.disableClose =  true;
   dialogConfig.autoFocus = true;
   dialogConfig.width = "60%";
   this.dialog.open(JuryListComponent, dialogConfig);
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

Supp(id){
  console.log('id', id);
  this.juryService.SuppJu(id).subscribe(data=>{
    let result :any = data; 
    if(result)
    {
      this.jurys = this.jurys.filter(c => c.id_jury !== id );
    }
  })
}
}
