import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { CobiroButtonComponent } from './cobiro-button/cobiro-button.component';



@NgModule({
  declarations: [
    HeaderBarComponent,
    MainMenuComponent,
    CobiroButtonComponent
  ],
  exports: [
    HeaderBarComponent,
    MainMenuComponent,
    CobiroButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
