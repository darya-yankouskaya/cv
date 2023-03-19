import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransformImageDirective } from './transform-image.directive';

@Component({
  template: `
    <img
      height="40px"
      width="40px"
      appTransformImage
      src="/assets/images/project1.jpg"
    />
  `
})
class TestComponent {}

describe('TransformImageDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let imageElem: HTMLImageElement;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [TransformImageDirective]
    }).createComponent(TestComponent);
    component = fixture.componentInstance;
    imageElem = fixture.nativeElement.querySelector('img');

    fixture.detectChanges();
  });

  it('should react on mouse hover/blur', () => {
    imageElem.dispatchEvent(new MouseEvent('mouseover'));

    expect(imageElem.classList).toContain('image--hovered');

    imageElem.dispatchEvent(new MouseEvent('mouseleave'));

    expect(imageElem.classList).not.toContain('image--hovered');
    expect(imageElem.style.transform).toBeFalsy();
  });

  it('should react on mouse move', () => {
    imageElem.dispatchEvent(new MouseEvent('mousemove'));

    const transform1 = imageElem.style.transform;

    imageElem.dispatchEvent(new MouseEvent('mousemove'));

    const transform2 = imageElem.style.transform;

    expect(transform1).not.toEqual(transform2);
  });
});
