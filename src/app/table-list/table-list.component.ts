import { Component, OnInit } from '@angular/core';
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
  constructor( private http:HttpClient ,private partService:ParticipantService) { }

  ngOnInit() {
    this.getparticipant(); 
  }

  getparticipant()
  { 
    {
      this.partService.getparticipant().subscribe(data=>{
        let result:any = data; 
        console.log(result.participant); 
        this.participants= result.participant; 
      })
  }
} }