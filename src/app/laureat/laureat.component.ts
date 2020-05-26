import { Component, OnInit } from '@angular/core';
import {MatDialog , MatDialogConfig,MatSort, MatTableDataSource} from "@angular/material"
import {AddlaureatComponent} from 'app/components/addlaureat/addlaureat.component'
import {LaureatService} from 'app/services/laureat.service';
import { HttpClient } from '@angular/common/http';
import {AddlautComponent} from 'app/components/addlaut/addlaut.component';
@Component({
  selector: 'app-laureat',
  templateUrl: './laureat.component.html',
  styleUrls: ['./laureat.component.scss']
})
export class LaureatComponent implements OnInit {
 lauts= []; 
 p: number = 1;
 base_url="http://localhost:3000"
 imageUrl = null;
  constructor(  private http:HttpClient, private laureatservice:LaureatService ,private dialog: MatDialog) { }

  ngOnInit() {
   
    this.getLaureat()
   
  }
  OpenNewLaureat(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose =  true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(AddlautComponent, dialogConfig).afterClosed().subscribe(result => {
      this.getLaureat();
    });
  }
  

  getLaureat()
  { 
    {   
      this.laureatservice.getLaureat().subscribe(data=>{
      

        let result:any = data; 
        console.log(result.laureats); 
       

        this.lauts = result.laureats; 
        

      })
  }
} 
Supp(id){
  console.log('id', id);
  this.laureatservice.SuppLaut(id).subscribe(data=>{
    let result :any = data; 
    if(result)
    { 
      this.lauts = this.lauts.filter(c => c.id_laureats !== id );
    }
  })
}




 
}
