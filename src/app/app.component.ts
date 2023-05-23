import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <router-outlet></router-outlet>
  <app-header></app-header>
  <app-banner></app-banner>
  <app-vechiles></app-vechiles>
  <app-destines></app-destines>
  <app-footer></app-footer>
  `
})
export class AppComponent {
  title = 'AluguelDeCarros';
}
