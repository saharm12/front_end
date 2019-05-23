import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
mail:string; 
psw:string ; 
  constructor( private router:Router, private http:HttpClient) { }

  ngOnInit() {
  }
  login()
  { 
    this.http.post("http://localhost:3000/users/login",{
      'email':this.mail,
      'password':this.psw 
    }).subscribe(data=>{
      console.log(data); 
    },err=>{
      console.log(err); 
    }); 
      //this.router.navigate(['/dashboard']); 
  }
}
