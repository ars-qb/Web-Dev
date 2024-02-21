import { Component, Input, OnInit } from '@angular/core';
import {SlickCarouselModule} from "ngx-slick-carousel";
import {NgForOf} from "@angular/common";
@Component({
  selector: 'app-image-gallery',
  standalone: true,
  imports: [
    SlickCarouselModule,
    NgForOf
  ],
  templateUrl: './image-gallery.component.html',
  styleUrl: './image-gallery.component.css'
})
export class ImageGalleryComponent implements OnInit {
  @Input() images: string[] = [];

  slideConfig = {
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }
}
