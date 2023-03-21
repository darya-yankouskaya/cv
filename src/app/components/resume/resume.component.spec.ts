import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeComponent } from './resume.component';

describe('ResumeComponent', () => {
  let component: ResumeComponent;
  let fixture: ComponentFixture<ResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all sections with titles', () => {
    const sections = fixture.nativeElement.querySelectorAll('.resume__section');
    const titles = fixture.nativeElement.querySelectorAll('.resume__title');

    expect(sections.length).toEqual(titles.length);
  });

  it('should have id for all section', () => {
    const sections: NodeListOf<Element> =
      fixture.nativeElement.querySelectorAll('.resume__section');

    sections.forEach(section => {
      expect(section.id).toBeTruthy();
    });
  });
});
