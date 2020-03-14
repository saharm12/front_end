import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' ; // Importation to client Http 


export interface Candidat {
    id_candidat;
nom_candidat;
prenom_candidat;
email_candidat;
telephone;
adresse;
code_postale;
ville;
  }


@Injectable({
  providedIn: 'root' //La propriété providedIn: root du décorateur permet de dire que le service est accessible globalement.
})

export class CandidatService {
BASE_URL='http://localhost:3000/candidat' ; 
 constructor(private http:HttpClient) { }

  
  getcandidat()
  { let token = localStorage.getItem('token'); 
    return this.http.get(this.BASE_URL+'/getcandidats',{headers:{
      'x-access-token':token 
    }}); 
  }

  
}