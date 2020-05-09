import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { MainMenuComponent } from './main-menu/main-menu.component';



@NgModule({
  declarations: [
    HeaderBarComponent,
    MainMenuComponent
  ],
  exports: [
    HeaderBarComponent,
    MainMenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
