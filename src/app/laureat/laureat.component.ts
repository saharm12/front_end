import { Component, OnInit } from '@angular/core';
import {MatDialog , MatDialogConfig,MatSort, MatTableDataSource} from "@angular/material"
import {AddlaureatComponent} from 'app/components/addlaureat/addlaureat.component'
import {LaureatService} from 'app/services/laureat.service';

@Component({
  selector: 'app-laureat',
  templateUrl: './laureat.component.html',
  styleUrls: ['./laureat.component.scss']
})
export class LaureatComponent implements OnInit {
 lauts= []; 
 p: number = 1;

  constructor(private laureatservice:LaureatService ,private dialog: MatDialog) { }

  ngOnInit() {
    this.getLaureat()

  }
  OpenNewLaureat(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose =  true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(AddlaureatComponent, dialogConfig);
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
}
