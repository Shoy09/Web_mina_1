import { Component, OnInit } from '@angular/core';
import { ContacIngComponent } from "../../Reutilizables/contac-ing/contac-ing.component";
import { BannerImagenComponent } from "../../Reutilizables/banner-imagen/banner-imagen.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subcategoria-productos',
  imports: [ContacIngComponent, BannerImagenComponent,CommonModule],
  templateUrl: './subcategoria-productos.component.html',
  styleUrl: './subcategoria-productos.component.css'
})
export class SubcategoriaProductosComponent implements OnInit {


  subcategoria = {
    titulo: 'Herramientas de Perforación Cónicas',
    descripcion: 'Brocas cónicas de alto rendimiento, diseñadas para máxima eficiencia y durabilidad.',
    descripcionFinal: 'Maxdrill ofrece productos de alta calidad, eficientes y sostenibles para todo tipo de perforación.',
    productos: [
      {
        titulo: 'Brocas de Botón Cónicas',
        descripcion: 'Dura de 5 a 6 veces más que una broca de punta plana, con dientes en acero aleado.',
        img: '/upload/3533/b/13_2_1_1_tapered-drilling-tools_01.jpg',
        link: '/1-5-1-tapered-button-bits.html'
      },
      {
        titulo: 'Barras de Perforación Cónicas',
        descripcion: 'Hechas de aceros huecos hexagonales, ideales para perforación de agujeros poco profundos.',
        img: '/upload/3533/b/13_2_1_1_tapered-drilling-tools_04.jpg',
        link: '/1-5-2-tapered-drill-rods.html'
      }
    ]
  };

  listaCategorias = [
    {
      titulo: 'Herramientas de Perforación con Martillo en Cabeza',
      link: '/productos/categorias',
      subproductos: [
        { titulo: 'Brocas de Perforación con Martillo en Cabeza', link: '/1-1-top-hammer-drill-bits.html' },
        { titulo: 'Barras de Perforación con Martillo en Cabeza', link: '/1-2-top-hammer-drill-rods.html' },
        { titulo: 'Adaptador de Culata', link: '/1-1-3-shank-adapter' },
        { titulo: 'Mangas de Acoplamiento', link: '/1-4-coupling-sleeves.html' },
        { titulo: 'Herramientas de Perforación Cónicas', link: '/1-2-1-tapered-drilling-tools' }
      ]
    },
    { titulo: 'Herramientas de Perforación DTH', link: '/2-dth-drilling-tools' },
    { titulo: 'Herramientas de Perforación en Sobrecarga', link: '/2-4-overburden-drilling-system' }
  ];

  activeCategoria = '/productos/categorias';
  activeSubcategoria = '/1-2-1-tapered-drilling-tools';

  constructor() { }

  ngOnInit(): void {}
}