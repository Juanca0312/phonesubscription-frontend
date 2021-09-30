import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import axios from 'axios';


export interface PhoneSubscription {
  id: number;
  month: string;
  network_technology: string;
  plan_type: string;
  subscriptions: number;
}

interface Mes {
  value: string;
  viewValue: string;
}

interface Technology {
  value: string;
  viewValue: string;
}

interface Plan {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {

  constructor(private dialog: MatDialog, public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PhoneSubscription) { }

  meses: Mes[] = [
    { value: '01', viewValue: 'Enero' },
    { value: '02', viewValue: 'Febrero' },
    { value: '03', viewValue: 'Marzo' },
    { value: '04', viewValue: 'Abril' },
    { value: '05', viewValue: 'Mayo' },
    { value: '06', viewValue: 'Junio' },
    { value: '07', viewValue: 'Julio' },
    { value: '08', viewValue: 'Agosto' },
    { value: '09', viewValue: 'Septiembre' },
    { value: '10', viewValue: 'Octubre' },
    { value: '11', viewValue: 'Noviembre' },
    { value: '12', viewValue: 'Diciembre' }

  ]

  year: string = "";
  month: string = "";
  tech: string = "";
  plan: string = "";
  subcription: number = 0;



  technology: Technology[] = [
    { value: '2G', viewValue: '2G' },
    { value: '3G', viewValue: '3G' },
    { value: '4G', viewValue: '4G' },
  ]

  plans: Plan[] = [
    { value: 'pre-paid', viewValue: 'pre-paid' },
    { value: 'post-paid', viewValue: 'post-paid' },
  ]

  ngOnInit(): void {
    this.year = this.data.month.split('-')[0]
    this.month = this.data.month.split('-')[1]
    this.tech = this.data.network_technology;
    this.plan = this.data.plan_type;
    this.subcription = this.data.subscriptions;
  }

  editSubscription() {

    if (this.year == null || this.month == null || this.tech == null || this.plan == null || this.subcription <= 0 || parseInt(this.year, 10) > 3000) {
      console.log(this.year);
      alert("Por favor llene campos válidos")
    } else {
      console.log(this.year);
      let year_month = this.year + '-' + this.month + '-01'
      axios.put(`https://phonesubcriptions-api.azurewebsites.net/api/phoneSubscriptions/${this.data.id}`, {
        month: year_month,
        network_technology: this.tech,
        plan_type: this.plan,
        subscriptions: this.subcription
      }).then(response => {
        alert("Actualizado correctamente");
        this.onClose()
      })
    }
  }

  deleteSubscription() {
    axios.delete(`https://phonesubcriptions-api.azurewebsites.net/api/phoneSubscriptions/${this.data.id}`).then(
      response => {
        alert("Eliminado correctamente");
        this.onClose()
      }
    );
  }

  onClose( ){
    const dialogRef = this.dialog.closeAll()
  }

}
