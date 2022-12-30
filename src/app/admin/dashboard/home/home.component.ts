import { Component, OnInit } from '@angular/core';

interface Place {
  imgSrc: string;
  name: string;
  description: string;
  charge: string;
  location: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  places: Array<Place> = [];
  dataSource: any;
  constructor() { }
  pieChartData = {
    labels: ['Active Student', 'Deactive Student', 'Student'],
    datasets: [
      {
        label: 'Student',
        data: [300, 500, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
        ],
      },
    ],
  };
  pieChartType = 'pie';
  chartClicked(e: any): void {
    console.log(e.active);
    console.log(e.event);
  }

  chartHovered(e: any): void {
    console.log(e);
  }
  ngOnInit() {
    this.dataSource = {
      position: 100
    }
  }
}
