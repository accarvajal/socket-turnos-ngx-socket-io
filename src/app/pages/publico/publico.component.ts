import { Component, OnInit } from '@angular/core';
import { Turno } from 'src/app/interfases/turno';
import { WebsocketService } from 'src/app/services/websocket.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-publico',
  templateUrl: './publico.component.html',
  styleUrls: ['./publico.component.css']
})
export class PublicoComponent implements OnInit {

  public turnoActual: number = 0;
  public escritorioActual: number = 0;
  public lista: Turno[] = [];
  public maxHistorialTurnos: number = environment.maxHistorialTurnos;
  private audio = new Audio();

  constructor(
    private wsService: WebsocketService
  ) {
    this.audio.src = '../../../assets/new-ticket.mp3';
    this.audio.load();
    this.audio.volume = environment.volumenAudio;
    this.listenForTurnos();
  }

  ngOnInit(): void {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('container');

    //console.log('solicitando lista ...');
    this.wsService.emit('lista-turnos');
  }

  listenForTurnos() {
    this.wsService.listen('lista-turnos')
        .subscribe((data: Turno[]) => {
          this.turnoActual = data[data.length - 1].turno;
          this.escritorioActual = data[data.length - 1].escritorio;

          //this.lista = data.slice(0, -1); //Todos

          // Obtener todos items de la lista menos el último item e invertir lista
          // en la vista solo se muestran el actual y un historial de max 3
          this.lista = data.slice(0, -1).reverse();

          this.audio.play();
        });
  }
}
