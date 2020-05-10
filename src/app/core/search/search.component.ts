import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  static DEFAULT_DEBOUNCE_TIME = 500;

  @Input() debounceTime: number;
  @Output() searchPhrase: EventEmitter<string> = new EventEmitter<string>();
  search: FormControl;

  private _subscription: Subscription = new Subscription();

  constructor() { }

  private onChange(searchPhrase: string) {
    this.searchPhrase.emit(searchPhrase);
  }

  ngOnInit(): void {
    if ( !isDebounceTimeValid(this.debounceTime) ) {
      this.debounceTime = SearchComponent.DEFAULT_DEBOUNCE_TIME;
    }

    this.search = new FormControl('');
    this._subscription.add(
      this.search.valueChanges.pipe(
        debounceTime(this.debounceTime),
        tap(this.onChange.bind(this))
      ).subscribe()
    );
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}

function isDebounceTimeValid(time: number) {
  return time >= 0;
}
