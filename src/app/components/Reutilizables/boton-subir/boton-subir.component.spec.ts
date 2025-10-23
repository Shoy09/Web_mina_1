import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonSubirComponent } from './boton-subir.component';

describe('BotonSubirComponent', () => {
  let component: BotonSubirComponent;
  let fixture: ComponentFixture<BotonSubirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonSubirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonSubirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
