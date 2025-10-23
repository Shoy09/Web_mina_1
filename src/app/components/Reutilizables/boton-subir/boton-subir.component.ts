import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { ContactoComponent } from '../../contacto/contacto/contacto.component';
import { FormularioContactoComponent } from '../../contacto/formulario-contacto/formulario-contacto.component';

@Component({
  selector: 'app-boton-subir',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './boton-subir.component.html',
  styleUrls: ['./boton-subir.component.css']
})
export class BotonSubirComponent {

  mostrarBoton = false;

  constructor(private dialog: MatDialog) {}

  // Detectar scroll para mostrar o esconder el botón
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.mostrarBoton = window.scrollY > 300;
  }

  // Subir suavemente al inicio
  subirArriba() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Abrir el diálogo de contacto
  abrirDialogoContacto() {
    this.dialog.open(FormularioContactoComponent, {
  width: '450px',
  panelClass: 'dialog-contacto-wrapper'
});
  }
}
