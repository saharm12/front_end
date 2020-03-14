import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2'
import { AuthService } from 'app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
mail:string; 
psw:string ; 
  constructor( private router:Router, private authServ:AuthService) { }

  ngOnInit() {
  }
  login()
  { 

    this.authServ.loginUser(this.mail,this.psw).subscribe(data=>{
let result:any =data ; 
console.log(result); 
if(result.user==true)
{
  localStorage.setItem('id',result.UserID); 
localStorage.setItem('token',result.token);  
this.router.navigate(['dashboard']); 
}else{

  Swal.fire({
    title: 'Error!',
    text: 'Adress ou mot de passe incorrecte',
    type: 'error',
    confirmButtonText: 'Cool'
  })
}

    })
    /*this.http.post("http://localhost:3000/users/login",{
      'email':this.mail,
      'password':this.psw 
    }).subscribe(data=>{
      console.log(data); 
      let result:any=data; 
      if(result.auth==true)
      {
        localStorage.setItem('id',result.UserID); 
      localStorage.setItem('token',result.token);  
     this.router.navigate(['dashboard']); 
      }else{

        Swal.fire({
          title: 'Error!',
          text: 'Adress ou mot de passe incorrecte',
          type: 'error',
          confirmButtonText: 'Cool'
        })
      }
      
    },err=>{
      console.log(err); 
    }); */
      //this.router.navigate(['/dashboard']); 
  }
}
