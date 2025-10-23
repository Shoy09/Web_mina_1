import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  imports: [CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

productos = [
    { nombre: 'Brocas de Perforación', imagen: 'assets/images/pro_01.jpg', link: '/productos/brocas' },
    { nombre: 'Barras de Perforación', imagen: 'assets/images/pro_02.jpg', link: '/productos/barras' },
    { nombre: 'Adaptadores de Culata', imagen: 'assets/images/pro_03.jpg', link: '/productos/adaptadores' },
    { nombre: 'Herramientas DTH', imagen: 'assets/images/pro_06.jpg', link: '/productos/dth' },
    { nombre: 'Herramientas Cónicas', imagen: 'assets/images/pro_07.jpg', link: '/productos/conicas' },
    { nombre: 'Bulones de Anclaje', imagen: 'assets/images/pro_05.jpg', link: '/productos/anclajes' },
    { nombre: 'Herramientas de Piqueras', imagen: 'assets/images/pro_08.jpg', link: '/productos/piqueras' },
    { nombre: 'Otros Productos', imagen: 'assets/images/pro_04.jpg', link: '/productos/otros' },
  ];

  industrias = [
    { nombre: 'Minería', imagen: 'assets/images/indus_01.jpg', link: '/industrias/mineria' },
    { nombre: 'Túneles', imagen: 'assets/images/indus_02.jpg', link: '/industrias/tuneles' },
    { nombre: 'Canteras', imagen: 'assets/images/indus_03.jpg', link: '/industrias/canteras' },
    { nombre: 'Pozos de Agua', imagen: 'assets/images/indus_04.jpg', link: '/industrias/pozos' },
    { nombre: 'Construcción', imagen: 'assets/images/indus_05.jpg', link: '/industrias/construccion' },
  ];
}