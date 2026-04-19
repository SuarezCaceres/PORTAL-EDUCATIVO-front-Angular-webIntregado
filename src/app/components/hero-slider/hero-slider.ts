import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-slider.html',
  styleUrls: ['./hero-slider.css']
})
export class HeroSlider {
  
  currentIndex = signal(0);

  slides = [
  {
    image: 'assets/hero1.jpg',
    title: 'Promovemos una formación cultural con propósito'
  },
  {
    image: 'assets/hero2.jpg',
    title: 'Excelencia académica para un futuro brillante'
  }
];

  nextSlide() {
    this.currentIndex.update(index => (index + 1) % this.slides.length);
  }

  prevSlide() {
    this.currentIndex.update(index => (index - 1 + this.slides.length) % this.slides.length);
  }
}