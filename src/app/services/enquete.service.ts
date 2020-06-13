import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' ; // Importation to client Http 

@Injectable({
  providedIn: 'root'
})
export class EnqueteService {
  BASE_URL='http://localhost:3000/satisfaction' ; 

  constructor(private http:HttpClient) { }


  getAllSatisfactions( )
  { let token = localStorage.getItem('token'); 
    return this.http.get(this.BASE_URL+'/get',{headers: {   
     'x-access-token':token 
    }}); 
  }




  
  getResponse1A(){
    let token = localStorage.getItem('token'); 
    return this.http.get(this.BASE_URL+'/reviews1A/:qst/:rep',{headers: {   
     'x-access-token':token 
    }});
  }


getResponse1B(){
  let token = localStorage.getItem('token'); 
  return this.http.get(this.BASE_URL+'/reviews1B/:qst/:rep',{headers: {   
   'x-access-token':token 
  }});
}
getResponse1C(){
  let token = localStorage.getItem('token'); 
  return this.http.get(this.BASE_URL+'/reviews1C/:qst/:rep',{headers: {   
   'x-access-token':token 
  }});
}
getResponse2A(){
  let token = localStorage.getItem('token'); 
  return this.http.get(this.BASE_URL+'/reviews2A/:qst/:rep',{headers: {   
   'x-access-token':token 
  }});
}
getResponse2B(){
  let token = localStorage.getItem('token'); 
  return this.http.get(this.BASE_URL+'/reviews2B/:qst/:rep',{headers: {   
   'x-access-token':token 
  }});
}
getResponse2C(){
  let token = localStorage.getItem('token'); 
  return this.http.get(this.BASE_URL+'/reviews2C/:qst/:rep',{headers: {   
   'x-access-token':token 
  }});
}
getResponse3A(){
  let token = localStorage.getItem('token'); 
  return this.http.get(this.BASE_URL+'/reviews3A/:qst/:rep',{headers: {   
   'x-access-token':token 
  }});
}
getResponse3B(){
  let token = localStorage.getItem('token'); 
  return this.http.get(this.BASE_URL+'/reviews3B/:qst/:rep',{headers: {   
   'x-access-token':token 
  }});
}
getResponse3C(){
  let token = localStorage.getItem('token'); 
  return this.http.get(this.BASE_URL+'/reviews3C/:qst/:rep',{headers: {   
   'x-access-token':token 
  }});
}
getResponse4A(){
  let token = localStorage.getItem('token'); 
  return this.http.get(this.BASE_URL+'/reviews4A/:qst/:rep',{headers: {   
   'x-access-token':token 
  }});
}
getResponse4B(){
  let token = localStorage.getItem('token'); 
  return this.http.get(this.BASE_URL+'/reviews4B/:qst/:rep',{headers: {   
   'x-access-token':token 
  }});
}
getResponse4C(){
  let token = localStorage.getItem('token'); 
  return this.http.get(this.BASE_URL+'/reviews4C/:qst/:rep',{headers: {   
   'x-access-token':token 
  }});
}
}











