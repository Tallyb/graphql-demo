import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { AuthorComponent } from './app/author.component';
import { Data } from './shared/data.service';

@Component({
  selector: 'app',
  template: `
    <author *ngFor="let author of authors | async" [author]="author"></author>
  `,
  directives: [AuthorComponent],
  pipes: [AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  authors: Promise<any>;

  constructor(
    private data: Data
  ) {}

  ngOnInit() {
    this.authors = this.fetch(1);
  }

  fetch(type: number) {
    return this.data[`fetchV${type}`]();
  }
}
