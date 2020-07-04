import { Component, OnInit } from '@angular/core';
import {EnqueteService} from 'app/services/enquete.service'
import { HttpClient } from '@angular/common/http';
import {Chart} from 'chart.js' ;
import {Enquete} from '../enquete/enquete.model'
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-enquete',
  templateUrl: './enquete.component.html',
  styleUrls: ['./enquete.component.scss']
})

export class EnqueteComponent implements OnInit {
    question: any = [{id:1,text:' Avez-vous apprécié l évenement (date,lieu,animateur..)'},{id:2,text:' Avez-vous apprécié l organisation de l évenement par iceberg'}, {id:3,text:' Pensez-vous participer a une autre de nos événement a l avenir'},{id:4,text:' Recommanderiez-vous nos évenement a un ami'}]
    p: number = 1;

enquetes= [];
enq:Enquete[]
satisfait;
moyennementSatisfait;
faiblementSatisfait;
questionStat;
myChart = [];
  constructor(private EnqSer :EnqueteService) { }

  ngOnInit() {
  this.questionStat =1;
  console.log(this.question[0].id)
this.getEnquete();
      
  }



  getEnquete()
  { 
      this.EnqSer.getAllSatisfactions().subscribe(data=>{
      

        let result:any = data; 
       
        console.log(result); 


        this.enquetes = result; 
        console.log(" aa",this.enquetes.filter(c=> c.Rep=="A"))

        this.satisfait=(this.enquetes.filter(c=> c.Rep=="A" && c.numQuestion==1)).length;
        this.moyennementSatisfait=(this.enquetes.filter(c =>  c.Rep=="B"&& c.numQuestion==1)).length;
        this.faiblementSatisfait=(this.enquetes.filter(c => c.Rep=="C"&& c.numQuestion==1)).length;
        this.myChart.push( new Chart("myChart", {
            type: 'doughnut',
            data: {
                labels: ['Satisfait', 'Moyennement Satisfait', 'Faiblement Satisfait'],
                datasets: [{
                    label: '# of Votes',
                    data: [this.satisfait, this.moyennementSatisfait, this.faiblementSatisfait],
                    backgroundColor: [
                        'rgba(255, 129, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                       
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            display:false
                        },
                        gridLines: {
                            display:false
                        }
                    }]
                }
            }
        })
        )
        console.log(" ttttt",this.satisfait)
      })



      


      
      
     
      
  }

  changeQuestion(idQuestion){
      console.log("id question",idQuestion)
          this.satisfait=(this.enquetes.filter(c=> c.Rep=="A" && c.numQuestion==idQuestion)).length;
    this.moyennementSatisfait=(this.enquetes.filter(c =>  c.Rep=="B"&& c.numQuestion==idQuestion)).length;
    this.faiblementSatisfait=(this.enquetes.filter(c => c.Rep=="C"&& c.numQuestion==idQuestion)).length; 
  console.log(this.satisfait,":",this.moyennementSatisfait,":",this.faiblementSatisfait)
  this.myChart.shift();
  this.myChart.push( new Chart("myChart", {
    type: 'doughnut',
    data: {
        labels: ['Satisfait', 'Moyennement Satisfait', 'Faiblement Satisfait'],
        datasets: [{
            label: '# of Votes',
            data: [this.satisfait, this.moyennementSatisfait, this.faiblementSatisfait],
            backgroundColor: [
                'rgba(255, 129, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
               
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    display:false
                },
                gridLines: {
                    display:false
                }
            }]
        }
    }
})
)


}
}
