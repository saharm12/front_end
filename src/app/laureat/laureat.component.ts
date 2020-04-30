import { Component, OnInit } from '@angular/core';
import {MatDialog , MatDialogConfig,MatSort, MatTableDataSource} from "@angular/material"
import {AddlaureatComponent} from 'app/components/addlaureat/addlaureat.component'
import {LaureatService} from 'app/services/laureat.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-laureat',
  templateUrl: './laureat.component.html',
  styleUrls: ['./laureat.component.scss']
})
export class LaureatComponent implements OnInit {
 lauts= []; 
 p: number = 1;
 imageUrl = null;

  constructor(  public _DomSanitizationService: DomSanitizer,private laureatservice:LaureatService ,private dialog: MatDialog) { }

  ngOnInit() {
    this.getLaureat()

  }
  OpenNewLaureat(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose =  true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(AddlaureatComponent, dialogConfig).afterClosed().subscribe(result => {
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
}
