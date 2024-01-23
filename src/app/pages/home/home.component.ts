import { Component, OnInit } from '@angular/core';
import { Notice } from 'src/app/models/notice.model';
import { NoticeServiceService } from 'src/app/services/notice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  notices: Notice[] = [];
  constructor(private noticeService: NoticeServiceService) {}

  ngOnInit(): void {
    this.notices = this.noticeService.getNotices();
  }
}
