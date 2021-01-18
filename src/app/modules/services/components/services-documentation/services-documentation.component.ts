import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../local-storage/local-storage.service';

@Component({
  selector: 'app-services-documentation',
  templateUrl: './services-documentation.component.html',
  styleUrls: ['./services-documentation.component.scss'],
})
export class ServicesDocumentationComponent implements OnInit {
  public state: { [key: string]: any } = {};

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit() {
    this.localStorageService.state$.subscribe((data) => {
      this.state = data;
    });
  }

  updateState(): void {
    this.localStorageService.setState('hello', 'my new world');
  }
}
