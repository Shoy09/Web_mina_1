import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-popup-distribuidores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popup-distribuidores.component.html',
  styleUrl: './popup-distribuidores.component.css'
})
export class PopupDistribuidoresComponent implements OnInit, OnDestroy {
  isVisible = true;
  private hasBeenClosedInThisPageLoad = false;

  ngOnInit() {
    this.checkPopupVisibility();
    this.setupVisibilityChangeListener();
  }

  ngOnDestroy() {
    this.removeVisibilityChangeListener();
  }

  private setupVisibilityChangeListener() {
    document.addEventListener('visibilitychange', this.handleVisibilityChange);
  }

  private removeVisibilityChangeListener() {
    document.removeEventListener('visibilitychange', this.handleVisibilityChange);
  }

  private handleVisibilityChange = () => {
    if (!document.hidden) {
      // Solo se ejecuta cuando volvemos a la pestaña
      this.checkPopupVisibility();
    }
  }

  private checkPopupVisibility() {
    const estadoGuardado = sessionStorage.getItem('popupDistribuidoresCerrado');
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      this.isVisible = false;
      return;
    }

    if (estadoGuardado === 'true' && this.hasBeenClosedInThisPageLoad) {
      // Fue cerrado en ESTA carga de página - no mostrar
      this.isVisible = false;
    } else if (estadoGuardado === 'true' && !this.hasBeenClosedInThisPageLoad) {
      // Fue cerrado en una sesión anterior pero no en esta carga - mostrar
      this.isVisible = true;
      // Resetear el sessionStorage para que solo dure hasta recargar
      sessionStorage.removeItem('popupDistribuidoresCerrado');
    } else {
      // Nunca ha sido cerrado - mostrar
      this.isVisible = true;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const width = (event.target as Window).innerWidth;
    if (width <= 768) {
      this.isVisible = false;
    } else {
      this.checkPopupVisibility();
    }
  }

  cerrarPopup() {
    this.isVisible = false;
    this.hasBeenClosedInThisPageLoad = true;
    sessionStorage.setItem('popupDistribuidoresCerrado', 'true');
  }
}