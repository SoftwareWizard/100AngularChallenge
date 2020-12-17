import { Component, Input, OnInit } from '@angular/core';
import { LoaderType } from './loader-type.enum';

const TEXT_LOADING = 'Loading';
@Component({
  selector: 'app-loader2',
  templateUrl: './loader2.component.html',
  styleUrls: ['./loader2.component.scss'],
})
export class Loader2Component implements OnInit {
  @Input() public isLoading = false;
  @Input() public loaderType: LoaderType = LoaderType.Circular;
  public LoaderType = LoaderType;
  private loadingPeriods = '.';

  public get loadingText(): string {
    return `${TEXT_LOADING}${this.loadingPeriods}`;
  }

  ngOnInit(): void {
    if (this.loaderType === LoaderType.Loading) {
      this.updateLoaderPeriods();
    }
  }

  private updateLoaderPeriods(): void {
    let currentStep = 0;
    setInterval(() => {
      switch (currentStep % 3) {
        case 0:
          this.loadingPeriods = '..';
          currentStep++;
          break;
        case 1:
          this.loadingPeriods = '...';
          currentStep++;
          break;
        case 2:
          this.loadingPeriods = '.';
          currentStep = 0;
          break;
      }
    }, 300);
  }
}
