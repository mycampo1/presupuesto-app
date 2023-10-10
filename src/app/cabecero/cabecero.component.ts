import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent {

  @Input() presupuestoTotal: number = 0;
  @Input() ingresoTotal: number = 0;
  @Input() egresoTotal: number = 0;
  @Input() porcentajeTotal: number = 0;

}
