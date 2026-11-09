import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../reveal-on-scroll.directive';

@Component({
  selector: 'app-inmortal',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './inmortal.component.html',
  styleUrl: './inmortal.component.scss'
})
export class InmortalComponent {}
