import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';


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
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent implements OnInit {



  constructor(private dialog: MatDialog) { }



  ngOnInit(): void {
  }

  meses: Mes[] = [
    {value: '01', viewValue: 'Enero'},
    {value: '02', viewValue: 'Febrero'},
    {value: '03', viewValue: 'Marzo'},
    {value: '04', viewValue: 'Abril'},
    {value: '05', viewValue: 'Mayo'},
    {value: '06', viewValue: 'Junio'},
    {value: '07', viewValue: 'Julio'},
    {value: '08', viewValue: 'Agosto'},
    {value: '09', viewValue: 'Septiembre'},
    {value: '10', viewValue: 'Octubre'},
    {value: '11', viewValue: 'Noviembre'},
    {value: '12', viewValue: 'Diciembre'}

  ]

  year: string = "";
  month: string = "";
  tech: string = "";
  plan: string = "";
  subcription: number = 0;



  technology: Technology[] = [
    {value: '2G', viewValue: '2G'},
    {value: '3G', viewValue: '3G'},
    {value: '4G', viewValue: '4G'},
  ]

  plans: Plan[] = [
    {value: 'pre-paid', viewValue: 'pre-paid'},
    {value: 'post-paid', viewValue: 'post-paid'},
  ]

  addSubscription(){
    if(this.year == "" || this.month == "" || this.tech == "" || this.plan == "" || this.subcription <= 0){
      alert("Completa todos los campos")
    }else{
      let year_month = this.year+'-'+this.month+'-01'
      console.log(year_month);
      axios.post('https://phonesubcriptions-api.azurewebsites.net/api/phoneSubscriptions',{
        month: year_month,
        network_technology: this.tech,
        plan_type: this.plan,
        subscriptions: this.subcription
      }).then(response => {
        alert("Agregado correctamente");
        this.onClose()

      })
    }

  }

  onClose( ){
    const dialogRef = this.dialog.closeAll()
  }
}
