import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { ProductosComponent } from './components/Productos/productos/productos.component';
import { IndustriasComponent } from './components/industrias/industrias/industrias.component';
import { SobreEmpresaComponent } from './components/sobre-empresa/sobre-empresa.component';
import { NovedadesComponent } from './components/novedades/novedades/novedades.component';
import { VideosComponent } from './components/videos/videos.component';
import { ContactoComponent } from './components/contacto/contacto/contacto.component';
import { CategoriaProductosComponent } from './components/Productos/categoria-productos/categoria-productos.component';
import { SubcategoriaProductosComponent } from './components/Productos/subcategoria-productos/subcategoria-productos.component';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'productos', component: ProductosComponent },
   { path: 'productos/categorias', component: CategoriaProductosComponent },
   { path: 'productos/categorias/sub', component: SubcategoriaProductosComponent },
  { path: 'industrias', component: IndustriasComponent },
  { path: 'sobre', component: SobreEmpresaComponent },
  { path: 'novedades', component: NovedadesComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: 'inicio' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}