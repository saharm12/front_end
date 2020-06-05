import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' ; // Importation to client Http 

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  BASE_URL='http://localhost:3000/document' ; 

  constructor(private http:HttpClient) { }


  getDocument( )
  { let token = localStorage.getItem('token'); 
    return this.http.get(this.BASE_URL+'/getdoc',{headers: {   
     'x-access-token':token 
    }}); 
  }
  suppdoc(id_fichier) {
    let token = localStorage.getItem('token'); 
    return this.http.delete(this.BASE_URL+'/deletedoc/'+id_fichier,{headers:{
      'x-access-token':token 
    }}); 
  }
  
}
