import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  searchTerm!: string;
  private searchTermSubject = new Subject<string>();
  @Output() searchTermChange = new EventEmitter<string>();

  constructor() {
    this.searchTermSubject
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((term) => (this.searchTerm = term));
  }

  ngOnInit(): void {
    this.searchTermSubject.subscribe((term) => {
      this.searchTermChange.emit(term);
    });
  }

  onInputChange() {
    this.searchTermSubject.next(this.searchTerm);
  }
}
