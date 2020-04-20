import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartellaComponentiComponent } from './cartella-componenti.component';

describe('CartellaComponentiComponent', () => {
  let component: CartellaComponentiComponent;
  let fixture: ComponentFixture<CartellaComponentiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartellaComponentiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartellaComponentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
