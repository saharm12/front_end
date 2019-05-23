import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
evnt:any=[]; 
reservation:any=[]; 
user:any=[] ; 
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getEvents(); 
    this.getReservation(); 
    this.getUserDetails(); 
  }
getEvents()
{ let id =localStorage.getItem('id'); 
  let token = localStorage.getItem('token'); 
  this.http.get('http://localhost:3000/event/event/'+id,{headers:{
    'x-access-token':token
  }}).subscribe(data=>{
    let result:any=data; 
    console.log("data", result); 
    this.evnt=result; 
    console.log(this.evnt); 
    
  })
}

getReservation()
{
  let id =localStorage.getItem('id'); 
  let token = localStorage.getItem('token'); 
  this.http.get('http://localhost:3000/reservation/reservation/'+id,{headers:{
    'x-access-token':token
  }}).subscribe(data=>{
    let result:any=data; 
    console.log("data", result); 
    this.reservation=result; 
     
  })
}

getUserDetails()
{
  let id =localStorage.getItem('id'); 
  let token = localStorage.getItem('token'); 
  this.http.get('http://localhost:3000/users/'+id,{headers:{
    'x-access-token':token
  }}).subscribe(data=>{
    let result:any=data; 
    console.log("data", result); 
    this.user=result;
    console.log("user",this.user);  
     
  })
}
}
