import { Component, Input } from '@angular/core';

const MAX_RATING = 5;

@Component({
  selector: 'app-starratings',
  templateUrl: './starratings.component.html',
  styleUrls: ['./starratings.component.scss'],
})
export class StarratingsComponent {
  @Input() rating = 5;

  public get fullStars(): number[] {
    let totalFullStars = Math.floor(this.rating);
    if (totalFullStars >= MAX_RATING) {
      totalFullStars = MAX_RATING;
    }
    return Array(totalFullStars).fill(0);
  }

  public get hasHalfStar(): boolean {
    return (
      this.rating - Math.floor(this.rating) >= 0.5 && this.rating !== MAX_RATING
    );
  }

  public get emptyStars(): number[] {
    let totalEmptyStars = Math.ceil(MAX_RATING - this.rating);
    if (this.hasHalfStar) {
      totalEmptyStars -= 1;
    }

    if (this.rating >= MAX_RATING) {
      totalEmptyStars = 0;
    }

    return Array(totalEmptyStars).fill(0);
  }
}
