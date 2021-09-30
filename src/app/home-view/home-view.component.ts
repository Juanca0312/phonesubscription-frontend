import { Component, OnInit, Inject } from '@angular/core';
import axios from 'axios';
import {MatDialog} from '@angular/material/dialog';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

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
      this.subscriptions = response.data;
    });
  }

  openAddDialog(){
    this.dialog.open(AddDialogComponent).afterClosed().subscribe(() => this.getAll());
  }


  public editModal(param: any){
    console.log(param.network_technology)
    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: param
    }).afterClosed().subscribe(() => this.getAll());
  }

}
