import { Component, OnInit } from '@angular/core';

interface Mes {
  value: number;
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

  constructor() { }

  ngOnInit(): void {
  }

  meses: Mes[] = [
    {value: 1, viewValue: 'Enero'},
    {value: 2, viewValue: 'Febrero'},
    {value: 3, viewValue: 'Marzo'},
    {value: 4, viewValue: 'Abril'},
    {value: 5, viewValue: 'Mayo'},
    {value: 6, viewValue: 'Junio'},
    {value: 7, viewValue: 'Julio'},
    {value: 8, viewValue: 'Agosto'},
    {value: 9, viewValue: 'Septiembre'},
    {value: 10, viewValue: 'Octubre'},
    {value: 11, viewValue: 'Noviembre'},
    {value: 12, viewValue: 'Diciembre'}

  ]

  technology: Technology[] = [
    {value: '2G', viewValue: '2G'},
    {value: '3G', viewValue: '3G'},
    {value: '4G', viewValue: '4G'},
  ]

  plans: Plan[] = [
    {value: 'pre-paid', viewValue: 'pre-paid'},
    {value: 'post-paid', viewValue: 'post-paid'},
  ]
}
