import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBarComponent } from './header-bar/header-bar.component';



@NgModule({
  declarations: [
    HeaderBarComponent
  ],
  exports: [
    HeaderBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
