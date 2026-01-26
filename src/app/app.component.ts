import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-worlds';

  constructor(private router: Router) {}

  toHome() {
    this.router.navigate(['/']);
  }

  toProyectos(event: string) {
    this.router.navigate(['/proyecto' + event]);
  }

  toSobremi() {
    this.router.navigate(['/sobremi']);
  }
}
