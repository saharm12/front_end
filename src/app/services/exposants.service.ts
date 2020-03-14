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

  
}