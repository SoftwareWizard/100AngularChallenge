import { Component, Input } from '@angular/core';
import { SocialMediaIcon } from './social-media-icon.interface';
import { SocialMedia } from './social-media.enum';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss'],
})
export class SocialMediaComponent {
  @Input() public socialMedia: SocialMediaIcon[] = [];
  public SocialMedia = SocialMedia;
}
