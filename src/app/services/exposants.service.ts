import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' ; // Importation to client Http 


export interface Exposant {
    id_exposant;
nom_exposant;
prenom_exposant;
email_exposant;
telephone;
raison_sociale;
adresse;
code_postale;
ville;
pays;
Mobile;
code_TVA;
  }


@Injectable({
  providedIn: 'root' 
})

export class ExposantService {
BASE_URL='http://localhost:3000/exposant' ; 
 constructor(private http:HttpClient) { }

  getexposant()
  { let token = localStorage.getItem('token'); 
    return this.http.get(this.BASE_URL+'/getexposants',{headers:{
      'x-access-token':token 
    }}); 
  }
  
  deletexposant(id) {
    let token = localStorage.getItem('token'); 
    return this.http.delete(this.BASE_URL+'/deletexposants/'+id,{headers:{
      'x-access-token':token 
    }}); 
  }


  acceptExposant(id) {
    let token = localStorage.getItem('token'); 
    return this.http.put(this.BASE_URL+'/acceptexposant/'+id,{headers:{
      'x-access-token':token 
    }}); 
  
}

refuserExposant(id) {
  let token = localStorage.getItem('token'); 
  return this.http.put(this.BASE_URL+'/refuserexposant/'+id,{headers:{
    'x-access-token':token 
  }}); 







}
getexposantBy()
  { let id = localStorage.getItem('id'); 
    let token = localStorage.getItem('token'); 
   return  this.http.get(this.BASE_URL+'/'+id,{headers:{'x-access-token':token}}) 
  }

}