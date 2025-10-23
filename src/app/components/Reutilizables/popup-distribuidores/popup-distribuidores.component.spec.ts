import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupDistribuidoresComponent } from './popup-distribuidores.component';

describe('PopupDistribuidoresComponent', () => {
  let component: PopupDistribuidoresComponent;
  let fixture: ComponentFixture<PopupDistribuidoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupDistribuidoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupDistribuidoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
