import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class Footer {
  currentYear = signal(new Date().getFullYear());

  contactInfo = signal({
    address: 'Av. Javier Prado Este 980, Urb. El Palomar San Isidro, Lima – Perú',
    email: 'admision@sanagustin.edu.pe',
    phone: '(511) 616 4242'
  });

 
  aboutLinks = ['San Agustín Lima', 'Nuestra Historia', 'Organización Interna', 'Somos Agustinos', 'Perfil Estudiante'];
  academicLinks = ['Nivel Inicial', 'Nivel Primaria', 'Nivel Secundaria', 'Programa IB', 'Formación Personal', 'Formación Espiritual', 'Formación Deportiva'];
}