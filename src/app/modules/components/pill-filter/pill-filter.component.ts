import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pill-filter',
  templateUrl: './pill-filter.component.html',
  styleUrls: ['./pill-filter.component.scss'],
})
export class PillFilterComponent {
  private pillLabels: string[];

  @Output() public selected = new EventEmitter<string[]>();
  @Input() set pills(value: string[]) {
    this.pillLabels = value;
    this.unselectedPills = value;
  }

  public unselectedPills: string[] = [];
  public selectedPills: string[] = [];

  public addFilter(pillDetails: {
    hasBeenSelected: boolean;
    label: string;
  }): void {
    if (pillDetails.hasBeenSelected) {
      const index = this.unselectedPills.indexOf(pillDetails.label);
      const [selectedPill] = this.unselectedPills.splice(index, 1);
      this.selectedPills.push(selectedPill);
      this.selected.emit(this.selectedPills);
    }
  }

  public removeFilter(pillDetails: {
    hasBeenSelected: boolean;
    label: string;
  }): void {
    if (!pillDetails.hasBeenSelected) {
      const index = this.selectedPills.indexOf(pillDetails.label);
      const [selectedPill] = this.selectedPills.splice(index, 1);
      this.unselectedPills.push(selectedPill);
    }
  }
}
