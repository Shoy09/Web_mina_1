import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreEmpresaComponent } from './sobre-empresa.component';

describe('SobreEmpresaComponent', () => {
  let component: SobreEmpresaComponent;
  let fixture: ComponentFixture<SobreEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SobreEmpresaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
