import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource ,MatDialogConfig} from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { ParticipantService } from 'app/services/participants.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailComponent } from 'app/detail/detail.component';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  participants= []; //local
  users:any=[]; 
  p: number = 1;

  dataSource = new MatTableDataSource(this.participants);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor( private http:HttpClient ,private dialog: MatDialog,private partService:ParticipantService) { }

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
Supprimer(id) 
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
openlistpart(idparticipant){
  console.log("ok",idparticipant);
  var exposantConsulted = this.participants.filter(c => c.id_participant == idparticipant );
  console.log("exposantConsulted",exposantConsulted[0]);
  const dialogConfig = new MatDialogConfig();
     dialogConfig.disableClose =  true;
     dialogConfig.autoFocus = true;
     dialogConfig.width = "350px";
     dialogConfig.height ="600px"
     dialogConfig.data={info:exposantConsulted[0]};
     this.dialog.open(DetailComponent, dialogConfig);
  
   }

   Enoyer_QRcode(id_participant,nom_participant,prenom_participant,email_participant){
    this.http.post('http://localhost:3000/participant/sendqr',{
      id:id_participant, 
      email:email_participant, 
      info: nom_participant+'/'+prenom_participant+'/'+email_participant
    }).subscribe(data=>{
   let result:any =data; 
      console.log(result);
   }) 
   
  }

  
  }
    