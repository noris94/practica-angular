import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstrenosComponent } from './estrenos.component';

describe('EstrenosComponent', () => {
  let component: EstrenosComponent;
  let fixture: ComponentFixture<EstrenosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstrenosComponent]
    });
    fixture = TestBed.createComponent(EstrenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
