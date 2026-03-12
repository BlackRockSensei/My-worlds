import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-worlds';

  constructor(private router: Router) {}

  private closeMenu(): void {
    const menuToggle = document.getElementById('menu-toggle') as HTMLInputElement;
    if (menuToggle) {
      menuToggle.checked = false;
    }
  }

  toHome() {
    this.closeMenu();
    this.router.navigate(['/']);
  }

  toProyectos(event: string) {
    this.closeMenu();
    this.router.navigate(['/proyecto' + event]);
  }

  toSobremi() {
    this.closeMenu();
    this.router.navigate(['/sobremi']);
  }
}
