import { Component, Input, OnInit } from '@angular/core';
import { UserProfileMeta } from '../user-profile-meta.interface';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {

  @Input() userProfileMeta: UserProfileMeta;
  constructor() { }

  ngOnInit(): void {
  }

}
