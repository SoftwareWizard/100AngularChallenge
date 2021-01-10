import { Directive, HostListener, Inject, Input } from '@angular/core';

@Directive({
  selector: '[appCopy]',
})
export class CopyDirective {
  @Input() appCopy = '';

  @HostListener('click') public async copy(): Promise<void> {
    try {
      await this.navigator.clipboard.writeText(this.appCopy);
      this.document.execCommand('copy');
    } catch {
      console.log('Copy failed');
    }
  }

  constructor(
    @Inject('Navigator') public navigator: Navigator,
    @Inject('Document') public document: Document
  ) {}
}
