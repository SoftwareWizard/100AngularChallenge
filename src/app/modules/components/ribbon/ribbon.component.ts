import { Component, Input, OnInit } from '@angular/core';
import { RibbonType } from './ribbon.type';
import { RibbonLocationType } from './location.type';

@Component({
  selector: 'app-ribbon',
  templateUrl: './ribbon.component.html',
  styleUrls: ['./ribbon.component.scss'],
})
export class RibbonComponent {
  @Input() public content = '';
  @Input() public location: RibbonLocationType = RibbonLocationType.BottomLeft;
  @Input() public type: RibbonType = RibbonType.Success;
}
