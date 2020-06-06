import { Component, OnInit , ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CandidatService,  } from 'app/services/candidats.service';
  import {PageEvent} from '@angular/material/paginator';
  import {MatTableModule,MatDialogConfig, MatSort} from '@angular/material';
  import { MatDialog } from '@angular/material/dialog';
import { DetaicanditComponent } from 'app/detaicandit/detaicandit.component';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-candidats',
  templateUrl: './candidats.component.html',
  styleUrls: ['./candidats.component.scss']
})
export class CandidatsComponent implements OnInit {
  candidats= []; //local
  p: number = 1;
  base_url="http://localhost:3000"


  constructor(private http:HttpClient,private dialog: MatDialog ,private candiService:CandidatService ) { 
  
   
  }
  
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.getcandidat(); 

  
  }
 
  getcandidat()
  { 
    {
      this.candiService.getcandidat().subscribe(data=>{
        let result:any = data; 
        console.log(result.candidat); 
        this.candidats= result.candidat; 
      })
  }
} 

Accepter(id)
{
  this.candiService.acceptCandidats(id).subscribe(data=>{
    let result : any = data ; 
    if(result)
    {
      this.getcandidat() ; 
    }
  })
}
 

Refuser (id){

  this.candiService.refuserCandidat(id).subscribe(data=>{
    let result :any = data; 
    if(result)
    {
      this.getcandidat() ; 
    }
  })

}




Supprimer(id) 
{
  Swal.fire({
    title:'Supprimer',
    text:'Voulez vous supprimer cet exposant ?', 
    confirmButtonText:'Oui',
    cancelButtonText:'Non',
    showCancelButton:true, 
    type:'warning'
    
    
  }).then(result=>{
    if(result.value)
    {
        this.candiService.deletcandidat(id).subscribe(data=>{
    let result :any = data; 
    console.log(result); 
    if(result)
    {
     this.getcandidat(); 
    }
  })
    }
  })

  
}

openlistcan(idcandidat){
  console.log("ok",idcandidat);
  var candidatConsulted = this.candidats.filter(c => c.id_candidat == idcandidat );
  console.log("candidatConsulted",candidatConsulted[0]);
  const dialogConfig = new MatDialogConfig();
     dialogConfig.disableClose =  true;
     dialogConfig.autoFocus = true;
     dialogConfig.width = "350px";
     dialogConfig.height ="600px"
     dialogConfig.data={info:candidatConsulted[0]};
     this.dialog.open(DetaicanditComponent, dialogConfig);

}

Enoyer_QRcode(id_candidat,email,nom_societe_agence,personne_responsable_candidature){
  this.http.post('http://localhost:3000/candidat/sendqr',{
    id:id_candidat, 
    candidatEmail:email, 
    info: nom_societe_agence+'/'+personne_responsable_candidature+'/'+email
  }).subscribe(data=>{
 let result:any =data; 
    console.log(result);
 }) 
 
}
}