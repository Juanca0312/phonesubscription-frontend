import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import {MatDialog} from '@angular/material/dialog';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';

export interface PhoneSubscriptions {
  id: number;
  month: string;
  network_technology: string;
  plan_type: string;
  subscriptions: number;
}

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  subscriptions: PhoneSubscriptions[] = [];



  ngOnInit(): void {
    this.getAll();
  }

  displayedColumns: string[] = ['month', 'network_technology', 'plan_type', 'subscriptions'];

  getAll(){
    axios.get('https://phonesubcriptions-api.azurewebsites.net/api/phoneSubscriptions')
    .then(response => {
      console.log(response.data);
      this.subscriptions = response.data;
      console.log(this.subscriptions[0].month);
    });
  }

  openAddDialog(){
    this.dialog.open(AddDialogComponent, {
      width:'30%'
    });
  }

}
