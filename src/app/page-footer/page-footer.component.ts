import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-page-footer',
  templateUrl: './page-footer.component.html',
  styleUrls: ['./page-footer.component.scss'],
})
export class PageFooterComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  toContact() {
    this.router.navigate(['/app-contact']);
  }
}
