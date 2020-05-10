import { Component, OnInit } from '@angular/core';
import { EventBusService } from './event-bus.service';
import { UserProfileMeta } from './core/user-profile-meta.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  userProfileInfo: UserProfileMeta;

  constructor(
    private eventBus: EventBusService
  ) {}

  ngOnInit(): void {
    this.userProfileInfo = this.eventBus.userProfileInfo.getValue();
  }

}
