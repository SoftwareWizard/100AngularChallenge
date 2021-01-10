import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-cut-out',
  templateUrl: './banner-cut-out.component.html',
  styleUrls: ['./banner-cut-out.component.scss'],
})
export class BannerCutOutComponent {
  @Input() public imageUrl =
    'https://images.unsplash.com/photo-1610208311724-72e7baf69795?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
  @Input() public title = '100 Angular Challenge';
}
