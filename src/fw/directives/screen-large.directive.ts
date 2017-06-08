import { Directive, Input, TemplateRef, ViewContainerRef, OnDestroy } from '@angular/core';

import { ScreenService } from '../services/screen.service';
import { Subscription } from "rxjs/Subscription";

@Directive({selector: '[screenLarge]'})
export class ScreenLarge implements OnDestroy {
  private screenSubscription: Subscription;
  private hasView = false;

  constructor(private viewContainer: ViewContainerRef,
                private template: TemplateRef<Object>,
                private screenService: ScreenService) {

    this.screenSubscription = screenService.resize$.subscribe(() => this.onResize());

  }

  @Input()
  set screenLarge(condition) {
    // ignore the passed condition and set it based on screen size
    condition = this.screenService.screenWidth >= this.screenService.largeBreakpoint;

    if (condition && !this.hasView) {
      this.hasView = true;
      this.viewContainer.createEmbeddedView(this.template);
    } else if (!condition && this.hasView) {
      this.hasView = false;
      this.viewContainer.clear();
    }
  }

  onResize() {
    // trigger the setter
    this.screenLarge = false;
  }

  ngOnDestroy(): void {
    this.screenSubscription.unsubscribe();
    throw new Error("Method not implemented.");
  }
}
