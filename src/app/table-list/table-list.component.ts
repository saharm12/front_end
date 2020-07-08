import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource ,MatDialogConfig} from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { ParticipantService } from 'app/services/participants.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailComponent } from 'app/detail/detail.component';
import Swal from 'sweetalert2';
import {AttestationComponent} from 'app/attestation/attestation.component'
import {ToastrService} from 'ngx-toastr'
import{Attesation} from '../attestation/attestation.model'
import { EnvoyerdocComponent } from 'app/envoyerdoc/envoyerdoc.component';
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
  constructor( private toastr: ToastrService,private http:HttpClient ,private dialog: MatDialog,private partService:ParticipantService) {
   }

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
  Swal.fire({
    title:'Supprimer',
    text:'Voulez vous supprimer cet participant?', 
    confirmButtonText:'Oui',
    cancelButtonText:'Non',
    showCancelButton:true, 
    type:'warning'
    
    
  }).then(result=>{
    if(result.value)
    {
        this.partService.deleteparticipant(id).subscribe(data=>{
    let result :any = data; 
    console.log(result); 

    Swal.fire(
      'Supprimé!',
      'Particiapnt a été supprimé avec succée',
      'success'
    )
    if(result)
    {
     this.getparticipant(); 
    }
  })
    }
  })}
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
   showSucess(){this.toastr.success('QrCode a été envoyé avec succés')}

   Enoyer_QRcode(id_participant,nom_participant,prenom_participant,email_participant){
    this.http.post('http://localhost:3000/participant/sendqr',{
      id:id_participant, 
      email:email_participant, 
      info: nom_participant+'/'+prenom_participant+'/'+email_participant
    }).subscribe(data=>{
      this.showSucess();
   let result:any =data; 
      console.log(result);
   }) 
   
  }

  Openaddmail(participant){
   
    

   // console.log(participant)
    localStorage.setItem("idP",participant.id_participant)
    localStorage.setItem("email",participant.email_participant)

    const dialogConfig = new MatDialogConfig();
       dialogConfig.disableClose =  true;
       dialogConfig.autoFocus = true;
       dialogConfig.width = "500px";
       dialogConfig.height ="300px"

       this.dialog.open(AttestationComponent, dialogConfig);
    
  }

  Opendoc(participant){
   
    

    // console.log(participant)
     localStorage.setItem("idP",participant.id_participant)
     localStorage.setItem("email",participant.email_participant)
 
     const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose =  true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "500px";
        dialogConfig.height ="300px"
 
        this.dialog.open(EnvoyerdocComponent, dialogConfig);
     
   }
  }
    