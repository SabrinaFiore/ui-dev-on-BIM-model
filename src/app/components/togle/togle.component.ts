import { Component, OnInit } from '@angular/core';
import { Viewer } from '@xbim/viewer';

@Component({
  selector: 'app-togle',
  templateUrl: './togle.component.html',
  styleUrls: ['./togle.component.scss']
})

export class TogleComponent implements OnInit {
  camera: boolean = false;
  status: any;
  viewer = new Viewer("viewer");
  walk = this.viewer.navigationMode = "walk";
  offset = this.viewer.camera;

  constructor() { }

  ngOnInit(): void {
    this.clickEvent();
  }

  clickEvent() {
    this.camera = !this.offset;
  }
}
