import { Component } from '@angular/core';
import { ContacIngComponent } from "../../Reutilizables/contac-ing/contac-ing.component";
import { CommonModule } from '@angular/common';
import { ProPrinciContacComponent } from "../../Reutilizables/pro-princi-contac/pro-princi-contac.component";
import { BannerImagenComponent } from "../../Reutilizables/banner-imagen/banner-imagen.component";

@Component({
  selector: 'app-industrias',
  imports: [CommonModule, ProPrinciContacComponent, BannerImagenComponent],
  templateUrl: './industrias.component.html',
  styleUrl: './industrias.component.css'
})
export class IndustriasComponent {

 industrias = [
    {
      titulo: 'Minería',
      img: '/upload/3533/b/hy1.jpg',
      descripcion: 'Herramientas de perforación de alta calidad diseñadas para proyectos mineros exigentes.',
      link: '/21-2-mining'
    },
    {
      titulo: 'Túneles',
      img: '/upload/3533/b/hy2.jpg',
      descripcion: 'Soluciones personalizadas para excavación y perforación de túneles con precisión.',
      link: '/21-5-tunneling'
    },
    {
      titulo: 'Canteras',
      img: '/upload/3533/b/hy3.jpg',
      descripcion: 'Tecnología avanzada para perforación en proyectos de canteras y agregados.',
      link: '/21-4-quarry-and-aggregate'
    },
    {
      titulo: 'Pozos de Agua',
      img: '/upload/3533/b/hy4.jpg',
      descripcion: 'Herramientas DTH eficientes para perforación de pozos de agua y pozos termales.',
      link: '/21-6-water-well'
    },
    {
      titulo: 'Construcción',
      img: '/upload/3533/b/hy5.jpg',
      descripcion: 'Soluciones robustas y confiables para proyectos de construcción civil.',
      link: '/21-1-construction'
    },
    {
      titulo: 'Pilotaje',
      img: '/upload/3533/b/hy6.jpg',
      descripcion: 'Equipos especializados para cimentaciones y estructuras de gran estabilidad.',
      link: '/21-3-piling'
    }
  ];

  productosPrincipales = [
    {
      titulo: 'Herramientas de Perforación con Martillo en Cabeza',
      img: '/products/pro_01.jpg',
      descripcion: 'Diseñadas para entregar una excelente fuerza de impacto a las rocas, con alta productividad.',
      link: '/1-top-hammer-drilling-tools'
    },
    {
      titulo: 'Herramientas de Perforación DTH',
      img: '/products/pro_02.jpg',
      descripcion: 'Rendimiento eficiente y alta durabilidad para perforación profunda y controlada.',
      link: '/2-dth-drilling-tools'
    },
    {
      titulo: 'Herramientas de Perforación en Sobrecarga',
      img: '/products/pro_03.jpg',
      descripcion: 'Sistema concéntrico ideal para perforar formaciones rocosas complejas con precisión.',
      link: '/2-4-overburden-drilling-system'
    }
  ];
}