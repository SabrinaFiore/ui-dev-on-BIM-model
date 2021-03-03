import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {

  items = Array.from({ length: 20 }).map((_, i) => `E02-C24-H0${i}`);

  constructor() { }

  ngOnInit(): void {
  }

}
