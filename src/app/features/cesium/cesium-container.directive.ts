/// <reference path="../../../../node_modules/@types/cesium/index.d.ts" />
import { Directive, ElementRef, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Directive({
  selector: '[ngcsCesiumContainer]'
})
export class CesiumContainerDirective implements OnInit {
  private viewer: Cesium.Viewer;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.viewer = new Cesium.Viewer(this.el.nativeElement, {
      geocoder: false
    });
    this.viewer.scene.debugShowFramesPerSecond = !environment.production;
  }
}
