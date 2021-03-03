import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {

  event =  'E02-C24-H01';
  items = Array.from({ length: 31 }).map((_, i) => `${i}`);

  constructor() { }

  ngOnInit(): void {
  }

}
