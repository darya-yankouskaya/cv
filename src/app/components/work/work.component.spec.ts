import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkComponent } from './work.component';

describe('WorkComponent', () => {
  let component: WorkComponent;
  let fixture: ComponentFixture<WorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(WorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all work cards', () => {
    const cardItems =
      fixture.nativeElement.querySelectorAll('.work-list__item');

    expect(cardItems.length).toEqual(component.workCards.length);
  });
});
