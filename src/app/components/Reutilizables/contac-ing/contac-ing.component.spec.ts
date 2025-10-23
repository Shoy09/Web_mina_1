import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacIngComponent } from './contac-ing.component';

describe('ContacIngComponent', () => {
  let component: ContacIngComponent;
  let fixture: ComponentFixture<ContacIngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContacIngComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContacIngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
