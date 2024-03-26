import { Component, Input, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.scss']
})
export class PortfolioCardComponent implements OnInit, AfterViewInit {

  constructor(private ref: ElementRef) {}

  @Input()
  imageSources: String[][];
 
  imageSourceNames: String[] = []
  alternateText: String[] = []
  slideWidth;
  track;
  slides;
  nextButton;
  prevButton;
  dotsNav;
  dots;
  currentslide = 'current-slide';

  ngOnInit() {
    console.log(this.imageSources)
    this.imageSources[0].forEach(imageSource => {
      this.imageSourceNames.push('assets/images/' + imageSource);
    });
    this.imageSources[1].forEach(altText => {
      this.alternateText.push(altText);
    });
  }

  ngAfterViewInit() {
    this.track = this.ref.nativeElement.querySelector('.carousel__track');
    this.slides = Array.from(this.track.children);
    this.nextButton = this.ref.nativeElement.querySelector('.carousel__button--right');
    this.prevButton = this.ref.nativeElement.querySelector('.carousel__button--left');
    this.dotsNav = this.ref.nativeElement.querySelector('.carousel__nav');
    this.dots = Array.from(this.dotsNav.children);
    this.slideWidth = this.slides[0].getBoundingClientRect().width;

    this.setSlidePostion(this.slides);
    this.setEventListeners();
  }


  setSlidePostion(slides: Element[] ) {
    slides.forEach((slide, index)=> {
      (slide as HTMLElement).style.left = this.slideWidth * index + 'px'
     })
  }

  setEventListeners() {
    this.nextButton.addEventListener('click', e => {
      const currentSlide = this.track.querySelector('.current-slide');
      const nextSlide = currentSlide.nextElementSibling as HTMLElement;
      const currentDot = this.dotsNav.querySelector('.current-slide');
      const nextDot = currentDot.nextElementSibling;

      this.moveToSlide(currentSlide, nextSlide);
      this.updateDots(currentDot, nextDot);
      this.hideChevrons(this.slides.findIndex(slide => slide === nextSlide));
    });
    
    this.prevButton.addEventListener('click', e => {
      const currentSlide = this.track.querySelector('.current-slide');
      const prevSlide = currentSlide.previousElementSibling as HTMLElement;
      const currentDot = this.dotsNav.querySelector('.current-slide');
      const prevDot = currentDot.previousElementSibling;

      this.moveToSlide(currentSlide, prevSlide);
      this.updateDots(currentDot, prevDot);
      this.hideChevrons(this.slides.findIndex(slide => slide === prevSlide));
    });

    this.dotsNav.addEventListener('click', e => {
      const targetDot = e.target.closest('button');
      if (!targetDot) return
        
      const currentSlide = this.track.querySelector('.current-slide');
      const currentDot = this.dotsNav.querySelector('.current-slide');
      const targetIndex = this.dots.findIndex(dot => dot === targetDot);
      const targetSlide = this.slides[targetIndex];
      
      this.moveToSlide(currentSlide, targetSlide);
      this.updateDots(currentDot, targetDot);
      this.hideChevrons(targetIndex);
    });
  }

  moveToSlide(currentSlide, targetSlide) {
      this.track.style.transform = `translateX(-${targetSlide.style.left})`
      currentSlide.classList.remove('current-slide');
      targetSlide.classList.add('current-slide');
  }
  
  updateDots(currentDot, targetDot) {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
  }

  hideChevrons(targetIndex) {
    if (targetIndex === 0) {
      this.prevButton.classList.add('is-hidden');
      this.nextButton.classList.remove('is-hidden')
    } else if (targetIndex === this.slides.length - 1) {
      this.nextButton.classList.add('is-hidden');
      this.prevButton.classList.remove('is-hidden')
    } else {
      this.prevButton.classList.remove('is-hidden');
      this.nextButton.classList.remove('is-hidden');
    }
  }
}
