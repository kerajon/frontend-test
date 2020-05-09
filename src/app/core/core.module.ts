import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { CobiroButtonComponent } from './cobiro-button/cobiro-button.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    HeaderBarComponent,
    MainMenuComponent,
    CobiroButtonComponent,
    SearchComponent
  ],
  exports: [
    HeaderBarComponent,
    MainMenuComponent,
    CobiroButtonComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
