import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelBase } from './panel-base.component';

describe('PanelBaseComponent', () => {
  let component: PanelBase;
  let fixture: ComponentFixture<PanelBase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelBase]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PanelBase);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
