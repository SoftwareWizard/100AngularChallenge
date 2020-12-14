import { Component, Input, OnInit } from '@angular/core';
import { AccordionItem } from './AccordionItem';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent {
  @Input() items: AccordionItem[] = [];

  public onToggle(item: AccordionItem): void {
    item.isExpanded = !item.isExpanded;
  }
}
