import { Component, OnInit } from '@angular/core';
import {EnqueteService} from 'app/services/enquete.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-enquete',
  templateUrl: './enquete.component.html',
  styleUrls: ['./enquete.component.scss']
})
export class EnqueteComponent implements OnInit {
enquetes= [];
  constructor(private EnqSer :EnqueteService) { }

  ngOnInit() {
    this.getEnquete();
  }



  getEnquete()
  { 
      
      this.EnqSer.getAllSatisfactions().subscribe(data=>{
      

        let result:any = data; 
        console.log(result.enquetes); 
       

        this.enquetes = result.enquete_satisfaction; 
        

      })
    
  }
}
