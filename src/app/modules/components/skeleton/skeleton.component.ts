import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss'],
})
export class SkeletonComponent {
  @Input() public width = '100%';
  @Input() public height = '100%';

  public get dimensions() {
    return { width: this.width, height: this.height };
  }
}
