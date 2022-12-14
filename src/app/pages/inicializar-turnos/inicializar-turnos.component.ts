import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-inicializar-turnos',
  templateUrl: './inicializar-turnos.component.html',
  styleUrls: ['./inicializar-turnos.component.css']
})
export class InicializarTurnosComponent {

  constructor(
    private http: HttpClient,
    private router: Router
  ) {

  }

  inicializarTurnos() {
    this.http.get(`${environment.apiURL}/inicializar-turnos`)
        .subscribe(() => {
          alert('Turnos inicializados!');
          this.router.navigate(['/home']);
        });
  }
}
