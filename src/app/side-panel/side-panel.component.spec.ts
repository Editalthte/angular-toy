import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidePanel } from './side-panel.component';

describe('SidePanelComponent', () => {
  let component: SidePanel;
  let fixture: ComponentFixture<SidePanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidePanel]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidePanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
