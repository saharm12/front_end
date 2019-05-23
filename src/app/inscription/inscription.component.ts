import { Component, OnInit } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
 nom:string; 
 prenom:string ; 
 email:string ; 
 tel:number ; 
 mdp:string ;  
 inscr :FormGroup
;   constructor(private http:HttpClient , private formBuild:FormBuilder,private router:Router) { 
     
}

  ngOnInit() {
  }
  register()
  {console.log(this.mdp); 
    this.http.post("http://localhost:3000/users/signup",{
      "name":this.nom,
      "firstname":this.prenom ,
      "email":this.email,
      "password":this.mdp,
      "tel":this.tel,
      
    }).subscribe(data=>{
      console.log(data); 
     let result:any=data; 
     if(result.auth==true)
     { localStorage.setItem('id',result.UserID); 
       localStorage.setItem('token',result.token);  
      this.router.navigate(['dashboard']); 
     } 
    },err=>{
      console.log(err); 
    }); 
    /*this.authenticate().then(data=>{
      console.log(data); 
    })*/
  }

  /*authenticate() {
    let body = new FormData();
    body.append('email', this.email);
    body.append('password', this.mdp);
    body.append('firstname', this.prenom);
    body.append('name', this.nom);
    body.append('tel', this.tel.toString());
    return new Promise(resolve => {
      this.http.post("http://localhost:3000/users/signup", body)
        .subscribe(data => {
          // console.log(data);
          resolve(data.json());
        }, error => {
          // console.log(error);
          resolve(error.json());
        });
    });
  }*/
}
