import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { State, Viewer, ViewType } from '@xbim/viewer';
import { Post } from 'src/app/posts.model';
import { map } from 'rxjs/operators';

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
  family: string | undefined;
  length: string | undefined;
  elementIDwex: number | undefined;

  constructor(private http: HttpClient){}

  ngOnInit(){
    var viewer = new Viewer("viewer");

    viewer.on('loaded', () => {
      viewer.show(ViewType.DEFAULT);
    });

    viewer.load('../assets/DAIROM2021-2.wexbim');
    viewer.start();
    viewer.camera = 0;
    // viewer.navigationMode = "walk";

    viewer.on("dblclick", function (args) {
      viewer.resetState(0);
      viewer.resetStyles();
      viewer.renderingMode = 4;
      viewer.setState(State.HIGHLIGHTED, [args.id])
      viewer.setState(State.HIGHLIGHTED, [args.model])
    });

    viewer.on("pick",  (args) => {
      if(args.id === null){
        viewer.resetState(26);
        viewer.resetStyles();
        viewer.renderingMode = 0;
      }
      else {
        viewer.renderingMode = 0;
        console.log(args);
        this.elementID = args.id;
        this.model = args.model;
        this.fetchElementInfo(args.id)
       }
    });
  }

  private fetchElementInfo(elID: number){
    this.http
    .get<{ [key: string]: Post }>('http://34.77.82.193:1433/api/dairom/${elID}')

    .pipe(
        map((responseData: any) => {
          const postsArray: Post[] = [];
          for (const key in responseData){
            if(responseData.hasOwnProperty(key)){
              postsArray.push({ ...responseData[key], ElementID: key});
            }
          }
          return postsArray;
      }))
    .subscribe((elementInfo) => {
        console.log(elementInfo[0].Family);
        console.log(elementInfo[0].Length);
        console.log(elementInfo[0].Width);
        console.log(elementInfo[0].Type);
    })
  }
}
