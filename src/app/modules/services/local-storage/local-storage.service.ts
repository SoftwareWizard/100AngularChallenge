import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private readonly stateKey = 'state';
  private state: { [key: string]: any };
  public state$ = new BehaviorSubject<{ [key: string]: any }>({});

  constructor(@Inject('LocalStorage') public localStorage: Storage) {
    const value = this.localStorage.getItem(this.stateKey);
    if (value && value !== 'undefined') {
      this.state = JSON.parse(value);
    }

    Object.freeze(this.state);
    this.state$.next(this.state);
  }

  public setState(key: string, value: any): void {
    this.state = { ...this.state, [key]: value };
    this.localStorage.setItem(this.stateKey, JSON.stringify(this.state));
    Object.freeze(this.state);
    this.state$.next(this.state);
  }
}
