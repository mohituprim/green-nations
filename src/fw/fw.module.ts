import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
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
import { PopupMenuComponent } from "fw/menus/popup-menu/popup-menu.component";
import { SignInComponent } from "fw/users/sign-in/sign-in.component";
import { RegisterUserComponent } from "fw/users/register-user/register-user.component";
import { DynamicFormComponent } from "fw/dynamic-forms/dynamic-form/dynamic-form.component";
import { DynamicFieldComponent } from "fw/dynamic-forms/dynamic-field/dynamic-field.component";
import { PanelComponent } from './panels/panel/panel.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [FrameworkBodyComponent,
                 ContentComponent,
                 TitleBarComponent,
                 TopBarComponent,
                 StatusBarComponent,
                 ScreenLarge,
                 ScreenBelowLarge,
                 MenuComponent,
                 MenuItemComponent,
                 PopupMenuComponent,
                 SignInComponent,
                 RegisterUserComponent,
                 DynamicFormComponent,
                 DynamicFieldComponent,
                 PanelComponent],
  providers: [FrameworkConfigService,
              ScreenService,
              MenuService
            ],
  exports:[FrameworkBodyComponent,
  DynamicFormComponent,
  PanelComponent,
  ScreenLarge,
  ScreenBelowLarge]
})
export class FwModule { }
