import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { ParticipantService } from 'app/services/participants.service';
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  participants= []; //local
  users:any=[]; 
  dataSource = new MatTableDataSource(this.participants);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor( private http:HttpClient ,private partService:ParticipantService) { }

  ngOnInit() {
    this.getparticipant(); 
    this.dataSource.paginator = this.paginator;
  }

  getparticipant()
  { 
    {
      this.partService.getparticipant().subscribe(data=>{
        let result:any = data; 
        console.log(result.particpant); 
        this.participants= result.particpant; 
      })
  }

} 
deleteparticipant(id) 
{
  console.log('id', id);
  this.partService.deleteparticipant(id).subscribe(data=>{
    let result :any = data; 
    if(result)
    {
      this.participants = this.participants.filter(p => p.id_participant !== id );
    }
  })
}
Accepter(id)
{
  this.partService.acceptParticpants(id).subscribe(data=>{
    let result : any = data ; 
    if(result)
    {
      this.getparticipant() ; 
    }
  })
}

Refuser(id)
{
  this.partService.refuserParticpants(id).subscribe(data=>{
    let result :any = data; 
    if(result)
    {
      this.getparticipant() ; 
    }
  })
}



}