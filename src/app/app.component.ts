import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'LEAPlegalApp';
  public isMobileLayout = false;

  ngOnInit() {
    window.onresize = () => this.isMobileLayout = window.innerWidth <= 865;
  }
}

