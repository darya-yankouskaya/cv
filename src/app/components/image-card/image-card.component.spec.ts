import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageCard } from 'src/app/models/image-card.model';

import { ImageCardComponent } from './image-card.component';

describe('ImageCardComponent', () => {
  let component: ImageCardComponent;
  let fixture: ComponentFixture<ImageCardComponent>;
  let expectedCard: ImageCard;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ImageCardComponent);
    component = fixture.componentInstance;
    expectedCard = { description: 'Test Description', url: '/test.jpg' };
    component.card = expectedCard;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show image correctly', () => {
    const img: HTMLImageElement =
      fixture.nativeElement.querySelector('.image-card__image');

    expect(img.alt).toEqual(expectedCard.description);
    expect(img.src).toContain(expectedCard.url);
  });
});
