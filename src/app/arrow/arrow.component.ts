import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.scss']
})
export class ArrowComponent {
  @Input() inverted: boolean = false;
  @Input() hovered: boolean = false;

  setClass() {
    this.hovered = true;
  }
}
