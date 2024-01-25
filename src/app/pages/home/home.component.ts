import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { Notice } from 'src/app/models/notice.model';
import { NoticeServiceService } from 'src/app/services/notice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  notices: Notice[] = [];
  filteredNotices: Notice[] = [];
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  searchTerm: string = '';

  constructor(private noticeService: NoticeServiceService) {}

  ngOnInit(): void {
    this.notices = this.noticeService.getNotices();
  }

  ngAfterViewInit() {
    this.headerComponent.searchTermChange.subscribe((term) => {
      this.searchTerm = term;
      this.searchResult();
    });
  }

  searchResult() {
    this.filteredNotices = this.noticeService.filteredNotices(
      this.notices,
      this.searchTerm
    );
    console.log(this.filteredNotices);
  }
}
