import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' ; // Importation to client Http 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
BASE_URL='http://localhost:3000/users' ; 
 constructor(private http:HttpClient) { }

  loginUser(email,mdp)
  {
    return this.http.post(this.BASE_URL+'/login',{
      'email':email, 
      'mdp':mdp
    }) ; 
  }

  
  getUserInfo()
  { let id = localStorage.getItem('id'); 
    let token = localStorage.getItem('token'); 
   return  this.http.get(this.BASE_URL+'/'+id,{headers:{'x-access-token':token}}) // appel de la requete de recupration des donnes utilisateurs 
  }

  deleteuser(id)
  {
    let token = localStorage.getItem('token'); 
    return  this.http.delete(this.BASE_URL+'/'+id,{headers:{'x-access-token':token}}) 
  }
}
