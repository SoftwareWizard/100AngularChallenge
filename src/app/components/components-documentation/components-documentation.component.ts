import { Component } from '@angular/core';
import { AccordionItem } from '../accordion/AccordionItem';

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

  public progressValue = 25;
  public rating = 0;
  public isLoading = false;
}
