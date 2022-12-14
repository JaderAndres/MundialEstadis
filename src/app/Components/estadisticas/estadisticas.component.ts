import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Observable } from 'rxjs';
import { Asistencia } from 'src/app/models/estadisticas/Asistencia';
import { Goleadores } from 'src/app/models/estadisticas/Goleadores';
import { TarjetaRoja } from 'src/app/models/estadisticas/TarjetaRoja';
import { AsistenciasService } from 'src/app/services/estadisticas/asistencias.service';
import { GoleadoresService } from 'src/app/services/estadisticas/goleadores.service';
import { TarjetasrojasService } from 'src/app/services/estadisticas/tarjetasrojas.service';


export interface PeriodicElement {
  Jugador: string;
  Goles: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { Jugador: 'Hydrogen', Goles:3 },
  { Jugador: 'Helium', Goles:2},
  { Jugador: 'Lithium', Goles:4},
  { Jugador: 'Beryllium', Goles:5},
  { Jugador: 'Boron', Goles:10},
  { Jugador: 'Carbon', Goles:4},
  { Jugador: 'Nitrogen', Goles:3},
  { Jugador: 'Oxygen', Goles:7},
  { Jugador: 'Fluorine', Goles:8},
  { Jugador: 'Neon', Goles:6}
];


@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})

export class EstadisticasComponent {
  displayedColumns: string[] = ['Jugador', 'Goles'];
  dataSource = ELEMENT_DATA;

  goleadores:Goleadores[] | undefined;
  asistencias:Asistencia[] | undefined;
  tarjetasrojas:TarjetaRoja[] | undefined;

  constructor(private goleadoresservice:GoleadoresService,
    private asistenciasservice:AsistenciasService,
    private tarjetasrojasservice:TarjetasrojasService) {}

  ngOnInit(){
    this.getDataGoleadores();
    this.getDataAsistencias();
    this.getDataTarjetasRojas();
  }

  getDataGoleadores() {
    this.goleadoresservice.getGoleadores().subscribe((dataGol: Goleadores[]) => {
      this.goleadores = dataGol;
      this.goleadores.sort((a, b) => (a.goles < b.goles) ? 1 : -1)
    });
 }

 getDataAsistencias() {
  this.asistenciasservice.getAsistencias().subscribe((dataAsis: Asistencia[]) => {
    this.asistencias = dataAsis;
    this.asistencias.sort((a, b) => (a.asistencias < b.asistencias) ? 1 : -1)
  });
}

getDataTarjetasRojas() {
  this.tarjetasrojasservice.getTarjetasRojas().subscribe((dataTR: TarjetaRoja[]) => {
    this.tarjetasrojas = dataTR;
    this.tarjetasrojas.sort((a, b) => (a.numero < b.numero) ? 1 : -1)
  });
}

}
