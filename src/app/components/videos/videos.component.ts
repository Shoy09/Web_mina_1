import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BannerImagenComponent } from "../Reutilizables/banner-imagen/banner-imagen.component";

interface Video {
  img: string;
  titulo: string;
}

interface CategoriaVideo {
  categoria: string;
  videos: Video[];
}

@Component({
  selector: 'app-videos',
  imports: [CommonModule, BannerImagenComponent],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css'
})
export class VideosComponent {

 videoPrincipal: Video = {
    img: '/images/video_01.jpg',
    titulo: 'Sobre Maxdrill'
  };

  // Videos de productos agrupados por categoría
  categoriasProductos: CategoriaVideo[] = [
    {
      categoria: 'Herramientas de Perforación con Martillo en Cabeza',
      videos: [
        { img: '/images/video_03.jpg', titulo: 'Brocas de Martillo en Cabeza' },
        { img: '/images/video_04.jpg', titulo: 'Varillas de Perforación Martillo en Cabeza' },
        { img: '/images/video_05.jpg', titulo: 'Adaptadores de Vástago' },
        { img: '/images/video_06.jpg', titulo: 'Mangas de Acoplamiento' },
      ]
    },
    {
      categoria: 'Brocas Cónicas y Barras',
      videos: [
        { img: '/images/video_07.jpg', titulo: 'Brocas Cónicas' },
        { img: '/images/video_08.jpg', titulo: 'Barras de Perforación Cónicas' },
        { img: '/images/video_09.jpg', titulo: 'Varillas para Tapones de Perforación' },
        { img: '/images/video_10.jpg', titulo: 'Varillas de Perforación Integral' },
      ]
    },
    {
      categoria: 'Herramientas de Perforación DTH',
      videos: [
        { img: '/images/video_12.jpg', titulo: 'Martillos DTH' },
        { img: '/images/video_13.jpg', titulo: 'Brocas DTH' },
        { img: '/images/video_14.jpg', titulo: 'Herramientas de Perforación con Circulación Inversa' },
      ]
    }
  ];


}