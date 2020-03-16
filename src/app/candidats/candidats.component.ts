import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CandidatService } from 'app/services/candidats.service';
@Component({
  selector: 'app-candidats',
  templateUrl: './candidats.component.html',
  styleUrls: ['./candidats.component.scss']
})
export class CandidatsComponent implements OnInit {
  candidats= []; //local

  constructor(private http:HttpClient ,private candiService:CandidatService ) { }

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


Supprimer(id)
{ 
  this.candiService.deletcandidat(id).subscribe(data=>{
    let result :any = data; 
    if(result)
    {
      this.getcandidat() ; 
    }
  })
}
}
