import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit
} from "@angular/core";

import { fromEvent, Subscription } from "rxjs";
import { filter, throttleTime } from "rxjs/operators";

@Component({
  selector: "nav",
  templateUrl: './nav.component.html',
  styleUrls: ["./nav.component.scss"]
})
export class NavComponent implements OnDestroy, OnInit {
  isOpen = false;
  // resize: Subscription;

  @HostListener("document:click", ["$event"]) onClick(event:any) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.checkIfNavDropDown();
    }
  }

  constructor(private elementRef: ElementRef) {}

  ngOnDestroy() {
    // this.resize.unsubscribe();
  }

  ngOnInit() {

    // this.resize = fromEvent(window, "resize")
    //   .pipe(
    //     throttleTime(500),
    //     filter(() => !!this.elementRef)
    //   )
    //   .subscribe(() => this.checkIfNavDropDown());
  }

  checkIfNavDropDown() {
    if (this.isOpen) {
      this.isOpen = false;
    }
  }

  onMenu() {
    this.isOpen = !this.isOpen;
  }
}
