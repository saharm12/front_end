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
enquetes= [];
enq:Enquete[]
  constructor(private EnqSer :EnqueteService) { }

  ngOnInit() {
  

      var myChart = new Chart("myChart", {
      type: 'doughnut',
      data: {
          labels: ['Red', 'Blue', 'Yellow'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3,],
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
                      beginAtZero: true
                  }
              }]
          }
      }
  });
  }



  getEnquete()
  { 
      
      this.EnqSer.getAllSatisfactions().subscribe(data=>{
      

        let result:any = data; 
        console.log(result.enquetes); 
       

        this.enquetes = result.enquete_satisfaction; 
        

      })
    
  }
}
