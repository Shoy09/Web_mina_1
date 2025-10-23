import { Component } from '@angular/core';
import { BannerImagenComponent } from "../Reutilizables/banner-imagen/banner-imagen.component";
import { ProPrinciContacComponent } from "../Reutilizables/pro-princi-contac/pro-princi-contac.component";

@Component({
  selector: 'app-sobre-empresa',
  imports: [BannerImagenComponent, ProPrinciContacComponent],
  templateUrl: './sobre-empresa.component.html',
  styleUrl: './sobre-empresa.component.css'
})
export class SobreEmpresaComponent {

}
