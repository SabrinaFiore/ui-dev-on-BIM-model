import { Component, OnInit } from '@angular/core';
import { State, Viewer, ViewType } from '@xbim/viewer';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {
  elementID: number | undefined;
  elementXyz: number | undefined;
  model: number | undefined;
  xyz: any | undefined;

  constructor() { }

  ngOnInit(): void {
    var viewer = new Viewer("viewer");

    viewer.on('loaded', () => {
      viewer.show(ViewType.DEFAULT);
    });

    viewer.load('../assets/DAIROM2021-2.wexbim');
    viewer.start();
    viewer.camera = 0;

    viewer.on("dblclick", function (args) {
      viewer.resetState(0);
      viewer.resetStyles();
      viewer.renderingMode = 4;
      viewer.setState(State.HIGHLIGHTED, [args.id])
      viewer.setState(State.HIGHLIGHTED, [args.model])
    });

    viewer.on("pick",  (args) => {
      if(args.id === null){
        viewer.resetState(0);
        viewer.resetStyles();
        viewer.renderingMode = 0;
      }
      else {
        viewer.renderingMode = 0;
        console.log(args);
        this.elementID = args.id;
        this.model = args.model;
        this.xyz = args.xyz;
       }
    });
  }
}
