import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.scss']
})
export class ArrowComponent {
  @Input() inverted: boolean = false;
  @Input() hovered: boolean = false;

  constructor(private sharedService: SharedService, private element: ElementRef) {}

  setClass() {
    this.hovered = true;
  }

  resetClass() {
    this.hovered = false;
  }

  /**
   * Creating Listener for scroll event to check elements visibility in viewport
   * @param event 
   */
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {    
    this.checkElementPosition();
  }

  /**
   * Check visibility for all portfolio projects in viewport and show all information of visible project
   */
  checkElementPosition() {
    this.hovered = this.elementIsVisible(this.element.nativeElement);
  }

  elementIsVisible(ele: HTMLElement) {
    return this.sharedService.elementIsVisible(ele);
  }
}
