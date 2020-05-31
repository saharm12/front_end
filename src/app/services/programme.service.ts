import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' ;
import { Programme } from 'app/programme/prog.model';


 @Injectable({
  providedIn: 'root'
})
export class ProgrammeService {
  BASE_URL='http://localhost:3000/programme' ; 

  constructor(private http:HttpClient) { }

 Ajouterprog(date_retenir,details_programme){ 
    let token = localStorage.getItem('token'); 
    return this.http.post(this.BASE_URL+'/ajouterProg',{
     'date_retenir':date_retenir,
     'details_programme':details_programme,

    }); 
    
  }

Getcontent(){
  let token = localStorage.getItem('token'); 
  return this.http.get(this.BASE_URL+'/getprog',{headers:{
    'x-access-token':token 
  }}); 
}

GetprogByid(id:number){
  let token = localStorage.getItem('token'); 
  return this.http.get(this.BASE_URL+'/GetprogByid/'+id,{headers:{
    'x-access-token':token 
  
  }}); 
}
supprog(id) {
  let token = localStorage.getItem('token'); 
  return this.http.delete(this.BASE_URL+'/supprog/'+id,{headers:{
    'x-access-token':token 
  }}); 
}
putprog( prog  :Programme){
  let token = localStorage.getItem('token'); 
  return this.http.put(this.BASE_URL+'/modif/'+ prog.id_programme,prog);
}}
