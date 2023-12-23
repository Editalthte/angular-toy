import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloPanel } from './hello-panel.component';

describe('HelloPanelComponent', () => {
  let component: HelloPanel;
  let fixture: ComponentFixture<HelloPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloPanel]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelloPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
