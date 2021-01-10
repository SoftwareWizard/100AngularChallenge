import { Component, Input } from '@angular/core';

const MILLISECONDS = 1000;
const MINUTE_IN_SECONDS = 60;
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;

const MINUTE_IN_MILLISECONDS = MINUTE_IN_SECONDS * MILLISECONDS;
const HOUR_IN_MILLISECONDS = MINUTES_IN_HOUR * MINUTE_IN_MILLISECONDS;
const DAY_IN_MILLISECONDS = HOURS_IN_DAY * HOUR_IN_MILLISECONDS;

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss'],
})
export class CountdownTimerComponent {
  private countDownTime: number;

  @Input() set time(value: string) {
    this.countDownTime = new Date(value).getTime();
  }

  get seconds(): string {
    const timeDifference = this.getTimeDifference();
    const seconds = Math.floor(
      (timeDifference % MINUTE_IN_MILLISECONDS) / MILLISECONDS
    );

    return this.formatNumber(seconds);
  }

  get minutes(): string {
    const timeDifference = this.getTimeDifference();
    const minutes = Math.floor(
      (timeDifference % HOUR_IN_MILLISECONDS) / MINUTE_IN_MILLISECONDS
    );

    return this.formatNumber(minutes);
  }

  get hours(): string {
    const timeDifference = this.getTimeDifference();
    const hours = Math.floor(
      (timeDifference % DAY_IN_MILLISECONDS) / HOUR_IN_MILLISECONDS
    );

    return this.formatNumber(hours);
  }

  get days(): string {
    const timeDifference = this.getTimeDifference();
    const days = Math.floor(timeDifference / DAY_IN_MILLISECONDS);

    return this.formatNumber(days);
  }

  get isTimeUp(): boolean {
    return this.seconds === '0' && this.minutes === '0' && this.hours === '0' && this.days === '0';
  }

  private getTimeDifference(): number {
    const currentTime = new Date().getTime();
    return this.countDownTime - currentTime;
  }

  private formatNumber(value: number): string {
    if (value < 0) {
      return '0';
    }

    return value < 10 ? `0${value}` : `${value}`;
  }
}
