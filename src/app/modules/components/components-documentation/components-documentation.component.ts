import { Component, ViewChild } from '@angular/core';
import { AccordionItem } from '../accordion/AccordionItem';
import { LoaderType } from '../loader2/loader-type.enum';
import { fadeInOutAnimation } from '../../shared/animations/fade-in-out.animation';
import { RibbonLocationType } from '../ribbon/location.type';
import { RibbonType } from '../ribbon/ribbon.type';
import { ButtonMeta } from '../button-toggle/button-meta';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { SocialMediaIcon } from '../social-media/social-media-icon.interface';
import { SocialMedia } from '../social-media/social-media.enum';
import { PillType } from '../pill/pill-type.enum';

@Component({
  selector: 'app-components-documentation',
  templateUrl: './components-documentation.component.html',
  styleUrls: ['./components-documentation.component.scss'],
  animations: [fadeInOutAnimation],
})
export class ComponentsDocumentationComponent {
  title = 'angular-challenges';
  IsInDom = false;

  public accordionItems: AccordionItem[] = [
    { title: 'Example 1', content: 'Example content 1', isExpanded: false },
    { title: 'Example 2', content: 'Example content 2', isExpanded: false },
  ];

  public tabs: { title: string; active: boolean }[] = [
    { title: 'Tab 1', active: true },
    { title: 'Tab 2', active: false },
  ];

  public selectedTab = 0;

  public progressValue = 25;
  public rating = 0;
  public isLoading = false;
  public isLoading2 = false;
  public isModalHidden = true;
  public toggleValue = false;
  public LoaderType = LoaderType;
  public loaded = true;
  public showSocialMedia = false;
  public isShownOverlay = false;

  public ribbonStyle = {
    location: RibbonLocationType.Hide,
    type: RibbonType.Success,
  };

  public RibbonLocation = RibbonLocationType;
  public RibbonType = RibbonType;
  public buttonToggleOptions: ButtonMeta[] = [
    new ButtonMeta({ id: 1, title: 'Bold' }),
    new ButtonMeta({ id: 2, title: 'Italic' }),
    new ButtonMeta({ id: 3, title: 'Underline' }),
  ];

  public socialMedia: SocialMediaIcon[] = [
    { href: '', type: SocialMedia.Facebook },
    { href: '', type: SocialMedia.Instagram },
    { href: '', type: SocialMedia.LinkedIn },
    { href: '', type: SocialMedia.Twitter },
    { href: '', type: SocialMedia.YouTube },
  ];

  public PillType = PillType;

  @ViewChild(SnackbarComponent, null) public snackBar: SnackbarComponent;

  public snackbarShow(): void {
    this.snackBar.show();
  }

  onSearchUpdate($event): void {
    console.log($event);
  }

  onToggleButtonSelection($event): void {
    console.log($event);
  }
}
