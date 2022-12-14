import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Turno } from 'src/app/interfases/turno';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nuevo-turno',
  templateUrl: './nuevo-turno.component.html',
  styleUrls: ['./nuevo-turno.component.css']
})
export class NuevoTurnoComponent implements OnInit {

  public ticket: Turno | null = null;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('container');

    this.generarNuevoTurno();
  }

  generarNuevoTurno() {
    this.http.get<Turno>(`${environment.apiURL}/turno`)
             .subscribe((data) => {
                setTimeout(() => this.ticket = data, 3000);
             });

  }

  solicitarNuevoTurno() {
    this.ticket = null;
    this.generarNuevoTurno();
  }

}
