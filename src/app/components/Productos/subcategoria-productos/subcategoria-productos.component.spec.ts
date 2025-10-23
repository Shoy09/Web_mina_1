import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoriaProductosComponent } from './subcategoria-productos.component';

describe('SubcategoriaProductosComponent', () => {
  let component: SubcategoriaProductosComponent;
  let fixture: ComponentFixture<SubcategoriaProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubcategoriaProductosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcategoriaProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
