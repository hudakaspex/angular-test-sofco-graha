import { Component, OnInit } from "@angular/core";
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";

interface Carousel {
  label: string;
  imageUrl: string;
}

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {
  caraousels: Carousel[];

  constructor(config: NgbCarouselConfig) {
    config.interval = 3000;
    config.keyboard = true;
    config.showNavigationArrows = false;
    config.animation = true;
  }

  ngOnInit() {}
}
