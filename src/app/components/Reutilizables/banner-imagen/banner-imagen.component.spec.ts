import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerImagenComponent } from './banner-imagen.component';

describe('BannerImagenComponent', () => {
  let component: BannerImagenComponent;
  let fixture: ComponentFixture<BannerImagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerImagenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
