import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrosel',
  templateUrl: './carrosel.component.html',
  styleUrl: './carrosel.component.css'
})
export class CarouselComponent implements OnInit {
  currentIndex: number = 0;
  totalItems!: number;

  ngOnInit() {
    // Inicializa o total de itens no carrossel
    this.totalItems = document.querySelectorAll('.gallery .sombra-container').length;
  }

  prevSlide() {
    if (this.currentIndex === 0) {
      this.currentIndex = this.totalItems - 1;
    } else {
      this.currentIndex--;
    }
    this.updateGalleryPosition();
  }

  nextSlide() {
    if (this.currentIndex === this.totalItems - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
    this.updateGalleryPosition();
  }

  updateGalleryPosition() {
    const gallery = document.querySelector('.gallery') as HTMLElement;
    const galleryWrapper = document.querySelector('.gallery-wrapper') as HTMLElement;
    const galleryWidth = galleryWrapper.clientWidth;
    gallery.style.transform = `translateX(-${this.currentIndex * galleryWidth}px)`;
  }
}
