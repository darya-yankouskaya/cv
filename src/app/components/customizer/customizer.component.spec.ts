import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CustomizerComponent } from './customizer.component';

describe('CustomizerComponent', () => {
  let component: CustomizerComponent;
  let fixture: ComponentFixture<CustomizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomizerComponent, BrowserAnimationsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
