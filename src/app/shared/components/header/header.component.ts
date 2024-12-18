import { Component, Inject, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  static accessToken: String = '';
  ishidden: boolean = true;
  static loginButtonEnable: boolean = false;
  static userName: String = "";
  static roleName: String = "";
  instance: any = HeaderComponent;
  static isLoggedIn: boolean = true;

  constructor() {
    //const userModel: UserModel = this.localStorageService.user;
  }

  ngOnInit(): void {

  }

  onShowMenu() {
    this.ishidden = this.ishidden ? false : true;
  }

  clickMenu(rounteName: String) {
    if (rounteName == 'logout') {
      if(this.ishidden) {
        $('.sidebar').toggleClass('active');
        $('.sidebarBtn').toggleClass('toggle');
        $('body').toggleClass('pageLock');
        $('.pageContent').toggleClass('slidePage');
        $('.header').toggleClass('slideHeader');
        $(".header").css('width', '100%');
      }
    }

  }

  get isLoggedIn() { return HeaderComponent.isLoggedIn; }

}
