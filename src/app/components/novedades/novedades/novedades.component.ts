import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContacIngComponent } from "../../Reutilizables/contac-ing/contac-ing.component";
import { ProPrinciContacComponent } from "../../Reutilizables/pro-princi-contac/pro-princi-contac.component";
import { BannerImagenComponent } from "../../Reutilizables/banner-imagen/banner-imagen.component";

@Component({
  selector: 'app-novedades',
  imports: [CommonModule, ProPrinciContacComponent, BannerImagenComponent],
  templateUrl: './novedades.component.html',
  styleUrl: './novedades.component.css'
})
export class NovedadesComponent {

 noticias = [
    {
      titulo: 'Nueva línea de brocas rotatorias',
      descripcion: 'Maxdrill lanza una nueva generación de brocas rotatorias con mayor eficiencia y durabilidad.',
      fecha: '15 Octubre 2025',
      imagen: '/images/news_01.jpg'
    },
    {
      titulo: 'Ampliamos nuestra planta de producción',
      descripcion: 'Maxdrill expande su capacidad con una nueva planta de 20,000 m² para mejorar tiempos de entrega.',
      fecha: '02 Octubre 2025',
      imagen: '/images/news_02.jpg'
    }
  ];

  novedadesRecientes = [
    'Mejora en control de calidad',
    'Nuevas alianzas internacionales',
    'Herramientas DTH más sostenibles'
  ];

  productos = [
    {
      titulo: 'Bulones de Anclaje',
      descripcion: 'Solución ideal para entornos inestables y zonas de fractura.',
      imagen: '/products/pro_05.jpg',
      link: '/5-anchor-bolts'
    },
    {
      titulo: 'Herramientas de Sobrecarga',
      descripcion: 'Sistema concéntrico ideal para formaciones complejas.',
      imagen: '/products/pro_03.jpg',
      link: '/2-4-overburden-drilling-system'
    },
    {
      titulo: 'Brocas Rotatorias',
      descripcion: 'Perfectas para pozos de agua, minería y perforaciones blandas.',
      imagen: '/products/pro_04.jpg',
      link: '/4-rotary-drill-bits'
    }
  ];
}