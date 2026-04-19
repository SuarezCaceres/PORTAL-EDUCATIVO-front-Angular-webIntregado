import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// IMPORTA SEGÚN TUS ARCHIVOS REALES
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { HeroSlider } from './components/hero-slider/hero-slider';
import { QuickAccess } from './components/quick-access/quick-access';
import { News } from './components/news/news';
import { Features } from './components/features/features';
import { Alliances } from './components/alliances/alliances';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Navbar,
    Footer,
    HeroSlider,
    QuickAccess,
    News,
    Features,
    Alliances
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('web-san-agustin');
}