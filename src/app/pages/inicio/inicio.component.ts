import { Component, OnInit, AfterViewInit, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit, AfterViewInit {

  // array de libros

  libros = [
    { img: '/img/libro3.jpg', titulo: 'Libro 1' },
    { img: '/img/libro5.jpg', titulo: 'Libro 2' },
    { img: '/img/libro3.jpg', titulo: 'Libro 3' },
    { img: '/img/libro4.jpg', titulo: 'Libro 4' },
    { img: '/img/libro5.jpg', titulo: 'Libro 5' },
    { img: '/img/libro6.jpg', titulo: 'Libro 6' },
    { img: '/img/libro7.jpg', titulo: 'Libro 7' },
    { img: '/img/libro4.jpg', titulo: 'Libro 8' },
    { img: '/img/libro4.jpg', titulo: 'Libro 9' },
    { img: '/img/libro5.jpg', titulo: 'Libro 10' },
    { img: '/img/libro6.jpg', titulo: 'Libro 11' },
    { img: '/img/libro7.jpg', titulo: 'Libro 12' },
    { img: '/img/libro4.jpg', titulo: 'Libro 13' }
  ];

  constructor(private elRef: ElementRef) {} // Para buscar elementos de forma segura

  // ngOnInit se ejecuta antes de que la vista esté lista
  ngOnInit(): void {
  }

  // ngAfterViewInit se ejecuta DESPUÉS de que el HTML se haya renderizado
  ngAfterViewInit(): void {
    this.inicializarCarruseles();
    this.inicializarObserverSubtitulos();
  }

  // HostListener reemplaza a 'window.addEventListener' para el scroll
  @HostListener('window:scroll')
  onWindowScroll() {
    // Lógica de la SECCIÓN 2 
    const seccion = this.elRef.nativeElement.querySelector('section.container.my-5.text-center');
    if (seccion) {
      const imagen = seccion.querySelector('.seccion2-img img') as HTMLElement;
      const h2 = seccion.querySelector('.seccion2-texto h2') as HTMLElement;
      const lead = seccion.querySelector('.seccion2-texto .lead') as HTMLElement;
      const boton = seccion.querySelector('.seccion2-texto button.btn-info') as HTMLElement;

      const top = seccion.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (top < windowHeight * 0.85) {
        imagen?.classList.add('animate');
        h2?.classList.add('animate');
        lead?.classList.add('animate');
        boton?.classList.add('animate');
      }
    }
  }

  // Función para la lógica de los subtítulos
  inicializarObserverSubtitulos(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    // Observar el subtítulo de "Recomendados"
    const subtitulo1 = this.elRef.nativeElement.querySelector('.container h3');
    if (subtitulo1) {
      observer.observe(subtitulo1);
    }
    
    // Observar los subtítulos de secciones 4 y 5
    const subtitulo4 = this.elRef.nativeElement.querySelector('#subtitulo4');
    if (subtitulo4) {
      observer.observe(subtitulo4);
    }
    
    const subtitulo5 = this.elRef.nativeElement.querySelector('#subtitulo5');
    if (subtitulo5) {
      observer.observe(subtitulo5);
    }
  }

  // Función para la lógica de los carruseles
  inicializarCarruseles(): void {
    const cardWidth = 136; 
    
    // Carrusel 1 (Recomendados)
    this.setupCarousel('carouselTrack', '.carousel-btn.prev', '.carousel-btn.next', cardWidth);

    // Carruseles 4 y 5
    this.setupCarousel('carouselTrack4', '#seccion4 .carousel-btn.prev', '#seccion4 .carousel-btn.next', cardWidth);
    this.setupCarousel('carouselTrack5', '#seccion5 .carousel-btn.prev', '#seccion5 .carousel-btn.next', cardWidth);
  }

  // Función auxiliar para no repetir código
  setupCarousel(trackId: string, prevSelector: string, nextSelector: string, cardWidth: number): void {
    const track = this.elRef.nativeElement.querySelector(`#${trackId}`);
    const prevBtn = this.elRef.nativeElement.querySelector(prevSelector);
    const nextBtn = this.elRef.nativeElement.querySelector(nextSelector);

    if(track && prevBtn && nextBtn) {
      prevBtn.addEventListener('click', () => {
        track.scrollBy({ left: -cardWidth, behavior: 'smooth' });
      });
      nextBtn.addEventListener('click', () => {
        track.scrollBy({ left: cardWidth, behavior: 'smooth' });
      });
    }
  }
}