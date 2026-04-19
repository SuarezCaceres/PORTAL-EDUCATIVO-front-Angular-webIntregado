import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-quick-access',
  standalone: true,
  templateUrl: './quick-access.html',
  styleUrls: ['./quick-access.css']
})
export class QuickAccess {
  
  accessItems = signal([
    {
      icon: '📖', 
      title: 'ADMISIÓN 2026',
      link: '#'
    },
    {
      icon: '👨‍🏫',
      title: 'REFORZAMIENTOS CON MATERIAL EXTRA',
      link: '#'
    },
    {
      icon: '🏢',
      title: '¿POR QUÉ ESTUDIAR CON NOSOTROS?',
      link: '#'
    },
    {
      icon: '📍',
      title: 'VISITA NUESTRAS INSTALACIONES',
      link: '#'
    }
  ]);
}