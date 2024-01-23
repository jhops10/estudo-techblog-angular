import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css'],
})
export class NoticeComponent {
  dataAtual: Date = new Date();
  options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  @Input()
  data: string = this.dataAtual.toLocaleDateString('pt-BR', this.options);
  @Input()
  title: string = '';
  @Input()
  content: string = '';
}
