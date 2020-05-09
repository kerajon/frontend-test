import { Component, HostBinding, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'button[cobiro-button]',
  templateUrl: './cobiro-button.component.html',
  styleUrls: ['./cobiro-button.component.scss']
})
export class CobiroButtonComponent {

  @Input()@HostBinding('attr.disabled')disabled;
  constructor() {}

}
