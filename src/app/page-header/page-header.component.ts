import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent implements OnInit {
  items: MenuItem[];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'About',
        routerLink: ['/app-about'],
      },
      {
        label: 'Projects',
        routerLink: ['/app-projects'],
      },
      {
        label: 'Contact',
        routerLink: ['/app-contact'],
      },
    ];
  }

  toHome() {
    this.router.navigate(['/app-home-page']);
  }

  toContact() {
    this.router.navigate(['/app-contact']);
  }
}
