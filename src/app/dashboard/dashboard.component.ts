import { Component, OnInit, Input, ViewChild } from '@angular/core';
import * as Chartist from 'chartist';
import { NgbModal, NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { ExposantService } from 'app/services/exposants.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  stringValue; 
  evnt:any=[]; 
  exposants= []; 
 
    model:any ;
    dateOfBirth:string ;  
    title:string ; 
    desc:string ; 
    date_debut:any ; 
    date_fin:any;
  constructor( private modalService: NgbModal , private htpp:HttpClient , private expoService:ExposantService) { }
  startAnimationForLineChart(chart){
      let seq: any, delays: any, durations: any;
      seq = 0;
      delays = 80;
      durations = 500;

      chart.on('draw', function(data) {
        if(data.type === 'line' || data.type === 'area') {
          data.element.animate({
            d: {
              begin: 600,
              dur: 700,
              from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
              to: data.path.clone().stringify(),
              easing: Chartist.Svg.Easing.easeOutQuint
            }
          });
        } else if(data.type === 'point') {
              seq++;
              data.element.animate({
                opacity: {
                  begin: seq * delays,
                  dur: durations,
                  from: 0,
                  to: 1,
                  easing: 'ease'
                }
              });
          }
      });

      seq = 0;
  };
  startAnimationForBarChart(chart){
      let seq2: any, delays2: any, durations2: any;

      seq2 = 0;
      delays2 = 80;
      durations2 = 500;
      chart.on('draw', function(data) {
        if(data.type === 'bar'){
            seq2++;
            data.element.animate({
              opacity: {
                begin: seq2 * delays2,
                dur: durations2,
                from: 0,
                to: 1,
                easing: 'ease'
              }
            });
        }
      });

      seq2 = 0;
  };
  ngOnInit() {
      /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */
     
      this.getExposants(); 

   
  }

  open(content)
 {
 this.model= this.modalService.open(content, { size: 'lg' });
 }

 getExposants()
 {
   this.expoService.getexposant().subscribe(data=>{
     let result:any = data; 
     console.log(result.exposant); 
     this.exposants= result.exposant; 
   })
 }
AddEvent()
{ let user_id =localStorage.getItem('id'); 
  let token = localStorage.getItem('token'); 
  this.htpp.post('http://localhost:3000/event/ajouter',{

  'title':this.title , 
  'description':this.desc, 
  'start_date':this.date_debut.formatted, 
  'end_date':this.date_fin.formatted ,
  'added_by':user_id
  
  },{headers:{
    'x-access-token':token
  }}).subscribe(data=>{
    let result:any=data; 
    console.log("data", result); 
   this.model.close(); 
    this.getEvents(); 
  })


}
 getEvents()
 { let token = localStorage.getItem('token'); 
  this.htpp.get('http://localhost:3000/event',{headers:{
    'x-access-token':token
  }}).subscribe(data=>{
    let result:any=data; 
    console.log("data", result); 
    this.evnt=result; 
    console.log(this.evnt); 
    
  })
 }
Reservation(event)
{
  let token = localStorage.getItem('token'); 
  let id = localStorage.getItem('id'); 
  this.htpp.post('http://localhost:3000/reservation/affecter',{
  'id_ev':event, 
  'user':id, 
  'accepted':0

  },{headers:{
    'x-access-token':token
  }}).subscribe(data=>{
    let result:any=data; 
    console.log(result); 
   
    
  })
}

}