import { Component, OnInit, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (typeof window !== 'undefined') {
      const sections = document.querySelectorAll('.scroll-section');
      
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const triggerPoint = windowHeight * 0.8;
        
        if (rect.top < triggerPoint && rect.bottom > 0) {
          section.classList.add('visible');
        }
      });
    }
  }

  ngOnInit() {
    // Verificar elementos visibles al cargar
    setTimeout(() => this.onScroll(), 100);
  }
}