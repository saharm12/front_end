import { Component, OnInit , ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CandidatService,  } from 'app/services/candidats.service';
  import {PageEvent} from '@angular/material/paginator';
  import {MatTableModule, MatSort} from '@angular/material';



@Component({
  selector: 'app-candidats',
  templateUrl: './candidats.component.html',
  styleUrls: ['./candidats.component.scss']
})
export class CandidatsComponent implements OnInit {
  candidats= []; //local
  p: number = 1;


  constructor(private http:HttpClient ,private candiService:CandidatService ) { 
  
 
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
  //this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to ... ?').then((confirmed) => console.log('User confirmed:', confirmed)).catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  console.log('id', id);
  this.candiService.deletcandidat(id).subscribe(data=>{
    let result :any = data; 
    if(result)
    {
      this.candidats = this.candidats.filter(c => c.id_candidat !== id );
    }
  })
}


}