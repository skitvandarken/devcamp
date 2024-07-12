import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalavirtualComponent } from './salavirtual.component';

describe('SalavirtualComponent', () => {
  let component: SalavirtualComponent;
  let fixture: ComponentFixture<SalavirtualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalavirtualComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalavirtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
