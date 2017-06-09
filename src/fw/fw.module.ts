import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkBodyComponent } from "./framework-body/framework-body.component";
import { ContentComponent } from "fw/content/content.component";
import { TitleBarComponent } from "fw/title-bar/title-bar.component";
import { FrameworkConfigService } from "fw/services/framework-config.service";
import { TopBarComponent } from "fw/top-bar/top-bar.component";
import { StatusBarComponent } from "fw/status-bar/status-bar.component";
import { ScreenService } from "fw/services/screen.service";
import { ScreenBelowLarge } from "fw/directives/screen-below-large.directive";
import { ScreenLarge } from "fw/directives/screen-large.directive";
import { MenuService } from "fw/services/menu.service";
import { MenuComponent } from "fw/menus/menu/menu.component";
import { MenuItemComponent } from "fw/menus/menu-item/menu-item.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [FrameworkBodyComponent,
                 ContentComponent,
                 TitleBarComponent,
                 TopBarComponent,
                 StatusBarComponent,
                 ScreenLarge,
                 ScreenBelowLarge,
                 MenuComponent,
                 MenuItemComponent],
  providers: [FrameworkConfigService,
              ScreenService,
              MenuService
            ],
  exports:[FrameworkBodyComponent]
})
export class FwModule { }
