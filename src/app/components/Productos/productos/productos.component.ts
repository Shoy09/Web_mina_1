import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContacIngComponent } from "../../Reutilizables/contac-ing/contac-ing.component";
import { Router } from '@angular/router';


@Component({
  selector: 'app-productos',
  imports: [CommonModule, ContacIngComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  constructor(private router: Router) {}

  irACategorias() {
    this.router.navigate(['/productos/categorias']);
  }
productos = [
    {
      titulo: 'Herramientas de Perforación con Martillo en Cabeza',
      descripcion:
        'Amplia gama de herramientas diseñadas para entregar una excelente fuerza de impacto a las rocas.',
      img: '/assets/products/pro_01.jpg',
      link: '/1-top-hammer-drilling-tools'
    },
    {
      titulo: 'Herramientas de Perforación DTH',
      descripcion:
        'Proporcionan un rendimiento eficiente, reducen los costes operativos y las emisiones.',
      img: '/assets/products/pro_02.jpg',
      link: '/2-dth-drilling-tools'
    },
    {
      titulo: 'Herramientas de Perforación en Sobrecarga',
      descripcion:
        'Sistema ideal para perforar agujeros en formaciones rocosas complejas con distintos tamaños disponibles.',
      img: '/assets/products/pro_03.jpg',
      link: '/2-4-overburden-drilling-system'
    },
    {
      titulo: 'Brocas Rotatorias',
      descripcion:
        'Brocas rotatorias para formaciones blandas como arena, arcilla o piedra blanda.',
      img: '/assets/products/pro_04.jpg',
      link: '/4-rotary-drill-bits'
    },
    {
      titulo: 'Bulones de Anclaje',
      descripcion:
        'Solución básica para el atornillado en entornos inestables, ideales en zonas de fractura.',
      img: '/assets/products/pro_05.jpg',
      link: '/5-anchor-bolts'
    },
    {
      titulo: 'Herramientas de Perforación de Piqueras',
      descripcion:
        'Ideales para terrenos arcillosos, permiten controlar la profundidad y ángulo de perforación.',
      img: '/assets/products/pro_06.jpg',
      link: '/3-taphole-drilling-tools'
    },
    {
      titulo: 'Herramientas de Perforación de Granito y Mármol',
      descripcion:
        'Taladro manual Y20 para perforar barrenos en rocas de dureza media a moderada.',
      img: '/assets/products/pro_07.jpg',
      link: '/5-quarry-drilling-tools'
    },
    {
      titulo: 'Otros Productos',
      descripcion:
        'Rectificadoras para afilar los bordes de corte de las brocas y otros accesorios.',
      img: '/assets/products/pro_08.jpg',
      link: '/others'
    }
  ];
}