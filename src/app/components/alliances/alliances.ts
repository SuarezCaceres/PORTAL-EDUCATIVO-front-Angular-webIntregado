import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-alliances',
  standalone: true,
  templateUrl: './alliances.html',
  styleUrls: ['./alliances.css']
})
export class Alliances {
  
  universities = signal([
    { name: 'U. Pacífico', logo: 'assets/logo-pacifico.png' },
    { name: 'Alliance Française', logo: 'assets/logo-af.png' },
    { name: 'Cambridge', logo: 'assets/logo-cambridge.png' },
    { name: 'Cibertec', logo: 'assets/logo-cibertec.jpg' }
  ]);

  
  tools = signal([
    { name: 'Moodle', logo: 'assets/logo-moodle.png' },
    { name: 'Google Workspace', logo: 'assets/logo-google.png' },
    { name: 'Canva', logo: 'assets/logo-canva.png' }
  ]);
}