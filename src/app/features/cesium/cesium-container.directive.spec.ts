import { CesiumContainerDirective } from './cesium-container.directive';
import { ElementRef } from '@angular/core';

describe('CesiumContainerDirective', () => {
  it('should create an instance', () => {
    const directive = new CesiumContainerDirective(new ElementRef(''));
    expect(directive).toBeTruthy();
  });
});
