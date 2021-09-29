import { Component, OnInit } from '@angular/core';
import axios from 'axios';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface PhoneSubscriptions {
  id: number;
  month: string;
  network_technology: string;
  plan_type: string;
  subscriptions: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {

  constructor() { }

  subscriptions: PhoneSubscriptions[] = [];



  ngOnInit(): void {
    this.getAll();
  }

  displayedColumns: string[] = ['month', 'network_technology', 'plan_type', 'subscriptions'];
  dataSource = ELEMENT_DATA;

  getAll(){
    axios.get('http://localhost:8080/api/phoneSubscriptions')
    .then(response => {
      console.log(response.data);
      this.subscriptions = response.data;
      console.log(this.subscriptions[0].month);
    });
  }

}
