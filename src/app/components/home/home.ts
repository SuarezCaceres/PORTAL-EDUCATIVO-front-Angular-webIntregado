import { Component } from '@angular/core';

// IMPORTA TODOS LOS COMPONENTES QUE USAS
import { HeroSlider } from '../hero-slider/hero-slider';
import { QuickAccess } from '../quick-access/quick-access';
import { News } from '../news/news';
import { Features } from '../features/features';
import { Alliances } from '../alliances/alliances';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroSlider,
    QuickAccess,
    News,
    Features,
    Alliances,
    Footer
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {}