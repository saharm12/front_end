import { Component, OnInit , ViewChild } from '@angular/core';
import { FormBuilder, FormGroup ,FormControl, Validators} from "@angular/forms";
import { NgForm } from '@angular/forms';
import { Programme} from './prog.model'
import { ProgrammeService   } from 'app/services/programme.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import {ToastrService} from 'ngx-toastr'




@Component({
  selector: 'app-programme',
  templateUrl: './programme.component.html',
  styleUrls: ['./programme.component.scss']
})
export class ProgrammeComponent implements OnInit {
  name = 'ng2-ckeditor';
  ckeConfig: any;
  mycontent: string;
  log: string = '';
  value : any;
 progModel :Programme;
 programmes=[];  
p:number;
  @ViewChild("myckeditor") ckeditor: any;
  constructor( private toastr: ToastrService,private progService:ProgrammeService ,private router: Router ) { 
    this.mycontent = `<p>My html content</p>`;
    this.progModel = new Programme();

  }
  showSucess()
{this.toastr.success('programme a été enregistrer avec succés')}
  ngOnInit() {
    this.Getcontent(),


    this.ckeConfig = {
      allowedContent: false,
      forcePasteAsPlainText: true,
      font_names: 'Arial;Times New Roman;Verdana',
      toolbarGroups: [
        { name: 'document', groups: ['mode', 'document', 'doctools'] },
        { name: 'clipboard', groups: ['clipboard', 'undo'] },
        { name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing'] },
        { name: 'forms', groups: ['forms'] },
        '/',
        { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
        { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph'] },
        { name: 'links', groups: ['links'] },
        { name: 'insert', groups: ['insert'] },
        '/',
        { name: 'styles', groups: ['styles'] },
        { name: 'colors', groups: ['colors'] },
        { name: 'tools', groups: ['tools'] },
        { name: 'others', groups: ['others'] },
        { name: 'about', groups: ['about'] }
      ],
      removeButtons: 'Source,Save,NewPage,Preview,Print,Templates,Cut,Copy,Paste,PasteText,PasteFromWord,Undo,Redo,Find,Replace,SelectAll,Scayt,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Strike,Subscript,Superscript,CopyFormatting,RemoveFormat,Outdent,Indent,CreateDiv,Blockquote,BidiLtr,BidiRtl,Language,Unlink,Anchor,Image,Flash,Table,HorizontalRule,Smiley,SpecialChar,PageBreak,Iframe,Maximize,ShowBlocks,About'
    };
  }
 
  onChange($event: any): void {
    console.log("onChange", $event);
  }
  Ajouter(){
    //console.log('myckeditor:' + myForm.controls['myckeditor'].value);
   // console.log('date:' + myForm.controls['date'].value);
   Swal.fire({
    title:'Enregistrer',
    text:'Voulez vous vraiment enregistrer  ?', 
    confirmButtonText:'Oui',
    cancelButtonText:'Non',
    showCancelButton:true, 
    type:'warning'
  }).then(result=>{
    if(result.value)
   this.progService.Ajouterprog( this.progModel.detail  ).subscribe(data=>{
    let result :any = data;
    console.log(result); 

    if(result)

    { this.showSucess(); 
       this.Getcontent();
      console.log("ok")
      
    }
  })

})
  }

  Getcontent(){
    this.progService.Getcontent().subscribe(data=>{
      let result:any = data; 
      console.log(result.programme); 
      this.programmes= result.programme; 
    })
  }



  
  GetcontentById(id_programme:number)  

  {  //this.progService.GetprogByid(id).subscribe(data=>{
    //let result:any = data;
    //console.log(result.programme); 

  //})

    this.router.navigate(['/Details'], { queryParams: { Id: id_programme } });  
   // this.router.navigate(['/login'])


  }  





  supprog(id)
{
  Swal.fire({
    title:'Supprimer',
    text:'Voulez vous supprimer cet exposant ?', 
    confirmButtonText:'Oui',
    cancelButtonText:'Non',
    showCancelButton:true, 
    type:'warning'
    
    
  }).then(result=>{
    if(result.value)
    {
        this.progService.supprog(id).subscribe(data=>{
    let result :any = data; 
    console.log(result); 
    if(result)
    {
     this.Getcontent(); 
    }
  })
    }
  })

  
}
     
}   


  
  

