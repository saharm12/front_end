import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' ; // Importation to client Http 


export interface Participant {
    id_participant;
nom_participant;
prenom_participant;
email_participant;
adresse;
code_postale;
raison_sociale;
code_TVA;
ville;
  }


@Injectable({
  providedIn: 'root' 
})

export class ParticipantService {
  acceptParticpants(id) {
    let token = localStorage.getItem('token'); 
    return this.http.put(this.BASE_URL+'/acceptparticipant/'+id,{headers:{
      'x-access-token':token 
    }}); 
  }


  refuserParticpants(id) {
    let token = localStorage.getItem('token'); 
    return this.http.put(this.BASE_URL+'/refuserparticipant/'+id,{headers:{
      'x-access-token':token 
    }}); 
  }

deletcandidat(id) {
    let token = localStorage.getItem('token'); 
    return this.http.put(this.BASE_URL+'/deletcandidat/'+id,{headers:{
      'x-access-token':token 
    }}); 
  }


BASE_URL='http://localhost:3000/participant' ; 
 constructor(private http:HttpClient) { }

  
  getparticipant()
  { let token = localStorage.getItem('token'); 
    return this.http.get(this.BASE_URL+'/getparticipants',{headers:{
      'x-access-token':token 
    }}); 
  }

  

  
}