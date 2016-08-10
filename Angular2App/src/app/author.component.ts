import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { BookComponent } from './book.component';

@Component({
  selector: 'author',
  template: `
    <img [src]="author.image"/>
    <div>
      <h2>{{author.name}}</h2>
    </div>
    <div class="books">
      <book *ngFor="let book of author.books" [book]="book"></book>
    </div>
  `,
  directives: [BookComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthorComponent {
  @Input() author: any;
}
