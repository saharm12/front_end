import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' ; // Importation to client Http 


export interface Candidat {
    id_candidat;
nom_candidat;
prenom_candidat;
email_candidat;
adresse;
code_postale;
ville;
Etats;
  }


@Injectable({
  providedIn: 'root' //La propriété providedIn: root du décorateur permet de dire que le service est accessible globalement.
})




export class CandidatService {
  acceptCandidats(id) {
    let token = localStorage.getItem('token'); 
    return this.http.put(this.BASE_URL+'/acceptcandidat/'+id,{headers:{
      'x-access-token':token 
    }}); 

  }



BASE_URL='http://localhost:3000/candidat' ; 
 constructor(private http:HttpClient) { }
 
  
  getcandidat()
  { let token = localStorage.getItem('token'); 
    return this.http.get(this.BASE_URL+'/getcandidats',{headers:{
      'x-access-token':token 
    }}); 
  }

  deletcandidat(id) {
    let token = localStorage.getItem('token'); 
    return this.http.delete(this.BASE_URL+'/deletcandidat/'+id,{headers:{
      'x-access-token':token 
    }}); 
  }
  
  refuserCandidat(id) {
    let token = localStorage.getItem('token'); 
    return this.http.put(this.BASE_URL+'/refusercandidat/'+id,{headers:{
      'x-access-token':token 
    }}); 
  
  
}}