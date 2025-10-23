import { Component } from '@angular/core';
import { ContacIngComponent } from "../contac-ing/contac-ing.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pro-princi-contac',
  imports: [ContacIngComponent, CommonModule],
  templateUrl: './pro-princi-contac.component.html',
  styleUrl: './pro-princi-contac.component.css'
})
export class ProPrinciContacComponent {

productosPrincipales = [
    {
      titulo: 'Brocas de Percusión',
      descripcion: 'Diseñadas para máxima durabilidad y eficiencia en roca dura.',
      img: '/assets/images/brocas.jpg'
    },
    {
      titulo: 'Barrenas de Túnel',
      descripcion: 'Soluciones robustas para perforación de túneles y minería subterránea.',
      img: '/assets/images/barrenas.jpg'
    },
    {
      titulo: 'Accesorios de Perforación',
      descripcion: 'Componentes complementarios para optimizar el rendimiento del equipo.',
      img: '/assets/images/accesorios.jpg'
    }
  ];
}