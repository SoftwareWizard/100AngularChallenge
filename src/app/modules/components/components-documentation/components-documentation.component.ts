import { Component } from '@angular/core';
import { AccordionItem } from '../accordion/AccordionItem';
import { LoaderType } from '../loader2/loader-type.enum';

@Component({
  selector: 'app-components-documentation',
  templateUrl: './components-documentation.component.html',
  styleUrls: ['./components-documentation.component.scss'],
})
export class ComponentsDocumentationComponent {
  title = 'angular-challenges';

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

  onSearchUpdate($event): void {
    console.log($event);
  }
}
