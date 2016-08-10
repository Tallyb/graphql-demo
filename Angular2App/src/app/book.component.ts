import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'book',
  template: `
    <img [src]="book.image"/>
    <div>
      {{book.title}}
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookComponent {
  @Input() book: any;
}
