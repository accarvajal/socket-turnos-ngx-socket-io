import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Turno } from 'src/app/interfases/turno';
import { WebsocketService } from 'src/app/services/websocket.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-escritorio',
  templateUrl: './escritorio.component.html',
  styleUrls: ['./escritorio.component.css']
})
export class EscritorioComponent implements OnInit {

  public escritorio: number = 0;
  public ticket: Turno | null = null;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private wsService: WebsocketService
  ) {
    activatedRoute.params.subscribe(params => {
      this.escritorio = params['id'];
    });

    this.listenForMensajes();
  }

  ngOnInit(): void {
    //this.wsService.emit('asignar-turno', this.escritorio);
  }

  atenderSiguienteTicket() {
    this.wsService.emit('asignar-turno', this.escritorio);
  }

  listenForMensajes() {
    this.wsService.listen('turno-asignado')
        .subscribe((ticket: Turno) => {
          this.ticket = ticket;

          if (ticket.turno > 0)
          {
            this.wsService.emit('lista-turnos');
          }
        });
  }

  terminarSesion() {
    this.http.post(`${environment.apiURL}/desasignar-escritorio`, { escritorio: this.escritorio })
        .subscribe(() => {
          this.router.navigate(['/home']);
        });
  }
}
