import { Component } from '@angular/core';
import { Ingreso } from './ingreso/ingreso.model';
import { Egreso } from './egreso/egreso.model';
import { IngresoServicio } from './ingreso/ingreso.servicio';
import { EgresoServicio } from './egreso/egreso.servicio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ingresos: Ingreso[] = [];
  egresos: Egreso[] = [];


  constructor(private ingresoServicio: IngresoServicio,
              private egresoServicio: EgresoServicio){
                this.ingresos = ingresoServicio.ingresos;
                this.egresos = egresoServicio.egresos;
              }

  getIngresosTotal(){
    let ingresoToal: number = 0;
    this.ingresos.forEach( ingreso => {
      ingresoToal += ingreso.valor;
    });
    return ingresoToal;
  }

  getEgresosTotal(){
    let egresoTotal: number = 0;
    this.egresos.forEach( egreso => {
      egresoTotal += egreso.valor;
    });
    return egresoTotal;
  }

  getPorcentajeTotal(){
    return this.getEgresosTotal() / this.getIngresosTotal();
  }

  getPresupuestoTotal(){
    return this.getIngresosTotal() - this.getEgresosTotal();
  }

}
