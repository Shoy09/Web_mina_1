import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProPrinciContacComponent } from './pro-princi-contac.component';

describe('ProPrinciContacComponent', () => {
  let component: ProPrinciContacComponent;
  let fixture: ComponentFixture<ProPrinciContacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProPrinciContacComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProPrinciContacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
