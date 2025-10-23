import { Component, OnInit } from '@angular/core';
import { ProPrinciContacComponent } from "../../Reutilizables/pro-princi-contac/pro-princi-contac.component";
import { BannerImagenComponent } from "../../Reutilizables/banner-imagen/banner-imagen.component";
import { CommonModule } from '@angular/common';
import { ContacIngComponent } from "../../Reutilizables/contac-ing/contac-ing.component";
import { Router } from '@angular/router';

interface CategoriaData {
  titulo: string;
  descripcion: string;
  imagen: string;
}

interface SubCategoria {
  titulo: string;
  img: string;
  link: string;
}

@Component({
  selector: 'app-categoria-productos',
  imports: [ BannerImagenComponent, CommonModule, ContacIngComponent],
  templateUrl: './categoria-productos.component.html',
  styleUrl: './categoria-productos.component.css'
})
export class CategoriaProductosComponent implements OnInit {
constructor(private router: Router) {}

  irACategorias() {
    this.router.navigate(['/productos/categorias/sub']);
  }
  
  productoTitulo = 'Herramientas de Perforación con Martillo en Cabeza';
  productoDescripcion = 'Maxdrill ofrece una amplia gama de herramientas de perforación...';
  productoImagen = '/products/1-top-hammer-drilling-tools_01.jpg';

  categorias = [
    { 
      titulo: 'Brocas de Martillo en Cabeza', 
      descripcion: 'Ideales para perforaciones precisas en todo tipo de terreno.',
      img: '/products/1-top-hammer-drilling-tools_02.jpg' 
    },
    { 
      titulo: 'Barras de Perforación', 
      descripcion: 'Fabricadas con acero de alta resistencia para máxima durabilidad.',
      img: '/products/1-top-hammer-drilling-tools_03.jpg' 
    },
    { 
      titulo: 'Manguitos y Adaptadores', 
      descripcion: 'Permiten una conexión segura y eficiente entre herramientas.',
      img: '/products/1-top-hammer-drilling-tools_04.jpg' 
    },
    { 
      titulo: 'Herramientas Cónicas', 
      descripcion: 'Diseñadas para perforaciones rápidas con mínima desviación.',
      img: '/products/1-top-hammer-drilling-tools_05.jpg' 
    },
  ];

  ventajasCol1 = [
    'Larga vida útil',
    'Bajo coste de perforación',
    'Menos tiempo de inactividad'
  ];

  ventajasCol2 = [
    'Tecnología avanzada para rendimiento óptimo',
    'Menos cambios de broca y mayor seguridad',
    'Agujeros rectos con menos desviación'
  ];

  descripcionFinal =
    'Como fabricante confiable de herramientas de perforación, Maxdrill se compromete a ofrecer productos económicos, eficientes y ecológicos. No importa el tipo de roca: nuestro equipo está listo para ofrecerle las soluciones que necesita.';

  ngOnInit(): void {}

}