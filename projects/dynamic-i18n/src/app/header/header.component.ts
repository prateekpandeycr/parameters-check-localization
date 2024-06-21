import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private readonly router: Router) {}

  ngOnInit() {}

  onLangChange(e: Event): void {
    const lang: string = (e.target as HTMLSelectElement).value;
    this.router.navigate([`/${lang}`]);
  }
}
