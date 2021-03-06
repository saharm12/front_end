import { Component, OnInit,Inject,ViewChild } from '@angular/core';
import { MatDialogRef} from '@angular/material';
import { JuryService  } from 'app/services/jury.service';
import { Jury} from 'app/jury-list/jury-list.model';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatSnackBar} from'@angular/material';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {  FileUploader ,FileUploaderOptions } from 'ng2-file-upload';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-editjury',
  templateUrl: './editjury.component.html',
  styleUrls: ['./editjury.component.scss']
})
export class EditjuryComponent implements OnInit {
  public uploader:FileUploader ;
  imageURL="";
  uploadedFile:File ;
  juryModel :Jury;
  jurys=[];

  

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private toastr: ToastrService,private snackBar : MatSnackBar,private http:HttpClient,private juryService:JuryService, public dialogbox: MatDialogRef<EditjuryComponent>  ) { 
    
  }
  @ViewChild(NgForm) ngForm: NgForm;

  ngOnInit() {
    console.log(this.data)
    let user = this.data.info ;
    console.log(user);
    this.juryModel = Object.assign({},user);
    console.log("form ",this.juryModel);
    
    

  }
  resetForm(){
    this.onClose();

  }
  
  onClose(){
    //console.log("form en close ",this.juryModel);
    this.dialogbox.close();
    //this.ngOnInit();
  
  }
  showSucess(){
    this.toastr.success('Modification correctement effectué')}
  getjury()
  { 
   {
     this.juryService.getjury().subscribe(data=>{
       let result:any = data; 
       console.log(result.membre_jury); 
       this.jurys= result.membre_jury; 
     })
 }
 } 
 fileChange(element) {
  this.uploadedFile = element.target.files[0];
}

showErr(){
  this.toastr.error('Linkedin deja existant')}



  Update(){
    
    
      
 
     let data = new FormData();

     data.append('nom_jury',this.juryModel.nom_jury);
     data.append('prenom_jury',this.juryModel.prenom_jury);
     data.append('profil_jury',this.juryModel.profil_jury);
     data.append('pays',this.juryModel.pays);
     console.log("file name",this.uploadedFile)
     
     this.http.post('http://localhost:3000/jurie/CheckputLinkedInNotTaken/'+this.juryModel.id_jury,{
      'profil_jury': this.juryModel.profil_jury,
       })
     .subscribe((res:any)=>{
      console.log(res.linkedInNotTaken)
    
      if(!res.linkedInNotTaken)
      { 
       this.showErr();
      }else{

    
     if (this.uploadedFile){
       console.log("file")
       data.append('userfile',this.uploadedFile);
       this.imageURL=this.uploadedFile.name;
       data.append('imageURL',"/uploads/"+this.imageURL);
     
     }else{
       console.log("no file",this.juryModel)
       this.imageURL=this.juryModel.image;
       data.append('imageURL',this.imageURL);
     }
     console.log("image", this.imageURL)
     
     
       this.http.put('http://localhost:3000/jurie/modifiersjur/'+this.juryModel.id_jury,data ).subscribe(data=>{
       let result:any =data; 
         console.log(result);
         if(result)
         { 
            this.showSucess();
            this.onClose();
           console.log("ok")
           
         }
       })
      
      }
    }) 
     
  }
  }
