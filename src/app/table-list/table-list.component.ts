import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  users:any=[]; 
  constructor( private http:HttpClient) { }

  ngOnInit() {
    this.getUsers(); 
  }

  getUsers()
  { let token = localStorage.getItem('token'); 
    this.http.get("http://localhost:3000/users/utilisateur",{
      headers:{
        'x-access-token':token
      }
    }).subscribe(data=>{
      console.log(data); 
      this.users =data; 
      console.log("USers",this.users); 
    })
  }
}
