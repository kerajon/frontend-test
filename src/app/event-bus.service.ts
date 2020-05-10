import { Injectable } from '@angular/core';
import { UserProfileMeta } from './core/user-profile-meta.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {

  userProfileInfo: BehaviorSubject<UserProfileMeta> = new BehaviorSubject<UserProfileMeta>({
    avatarUrl: '/assets/c4beea3c4cccbceb8de269c8cdf11f2e.png',
    userName: 'Morten'
  });

  constructor() { }
}
