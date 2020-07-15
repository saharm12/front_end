
import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef} from '@angular/material';
import { HttpClient } from '@angular/common/http';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {  FileUploader  } from 'ng2-file-upload';
import {Envoyerdoc} from '../envoyerdoc/envoyerdoc.model';
import {ParticipantService} from '../services/participants.service';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-envoyerdoc',
  templateUrl: './envoyerdoc.component.html',
  styleUrls: ['./envoyerdoc.component.scss']
})
export class EnvoyerdocComponent implements OnInit {
  public uploader:FileUploader ;
  uploadedFile:File ;
  Modeldoc: Envoyerdoc;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,  private toastr: ToastrService,private partServ : ParticipantService,private http:HttpClient,public dialogbox: MatDialogRef<EnvoyerdocComponent>) { }

  ngOnInit() {
  }
  onClose(){
    this.dialogbox.close();
   
  }
  showSucess()
{this.toastr.success('Document a été envoyé avec succés')}

  fileChange(element) {
    this.uploadedFile = element.target.files[0];
 } 
 showerror()
  {this.toastr.error('no file selected')}
  Senddocument(id:number){
    let data = new FormData(); 

    console.log(this.uploadedFile)
    console.log(localStorage.getItem("idP"))
    data.append('image',this.uploadedFile); 
    if(this.uploadedFile == null){
      this.showerror()
  
    }else{
    this.http.post('http://localhost:3000/participant/Adddoc/'+localStorage.getItem("idP")+"/"+localStorage.getItem("email"),data).subscribe(data=>{
      let result:any =data; 
        console.log(result);
        this.showSucess();

      })

  }}
}

 

