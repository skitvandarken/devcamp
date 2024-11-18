import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscreverComponent } from './inscrever.component';

describe('InscreverComponent', () => {
  let component: InscreverComponent;
  let fixture: ComponentFixture<InscreverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscreverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InscreverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
