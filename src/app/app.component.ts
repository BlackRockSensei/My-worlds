import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  title = 'my-worlds';
  private observer: IntersectionObserver | null = null;

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

  ngAfterViewInit(): void {
    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') return;

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const el = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          el.classList.add('visible');
        }
      });
    }, { threshold: 0.15 });

    const items = document.querySelectorAll('.reveal-on-scroll');
    items.forEach(i => this.observer?.observe(i));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.observer = null;
  }
}
