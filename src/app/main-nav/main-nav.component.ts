import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  public screenHeight = 0;
  public screenWidth = 0;

  constructor() {this.getScreenSize();}

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
  }

  ngOnInit(): void {
    
  }

  public showSidebar(): void{
    let sideBar = document.querySelector('.sidebar') as HTMLElement
    let sideDisplay = getComputedStyle(sideBar)
    let navList = document.querySelector('.nav-list') as HTMLElement
    let nav = document.querySelector('nav') as HTMLElement

    if (sideDisplay.right === `-${this.screenWidth}px`)
    {
      sideBar.style.right = `${-this.screenWidth * 0.2}px`
      sideBar.style.boxShadow = "2px 2px 2px 5px var(--clr-neutral-100)"
      navList.style.display = "none"
      nav.style.backgroundColor = "transparent"
      nav.style.boxShadow = "none"
    }
    else {
      sideBar.style.right = `-${this.screenWidth}px`
      sideBar.style.boxShadow = "none"
      navList.style.display = "flex"
      nav.style.backgroundColor = "var(--clr-neutral-100)"
      nav.style.boxShadow = "2px 2px 3px var(--clr-neutral-200)"
    }
  }

}
