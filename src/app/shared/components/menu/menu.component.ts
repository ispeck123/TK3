import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any; 

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isPanelOpen = false;
  menu:any;

  constructor(private router: Router) {
    this.menu={

    }
  }

  ngOnInit(): void {
   
  }

  togglePanel() {
    $('.pageContent').toggleClass('slidePage');
    const leftPanel = document.getElementById('leftPanel');
    if (leftPanel) {
      const windowHeight: number = window.innerHeight;
      const targetHeight: number = 0;
      leftPanel.style.top = `${targetHeight}px`;
      leftPanel.style.height = `${windowHeight - targetHeight}px`;
      if (leftPanel.classList.contains('open')) {
        leftPanel.classList.remove('open');
      } else {
        leftPanel.classList.add('open');
      }
    }
  }

}
