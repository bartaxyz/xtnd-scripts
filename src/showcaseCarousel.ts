(() => {
  class ShowcaseCarousel {
    currentIndex?: number;

    section: HTMLElement;
    carouselContent: HTMLElement;
    carouselSlides: HTMLCollection;
    controlsHandles: HTMLCollection;
    controlsHandleTimers: HTMLCollection;

    timer: number = 0;
    timerRefreshRate = 60;
    timerDuration = 5 * 1000;

    constructor(section: HTMLDivElement) {
      this.section = section;
      this.carouselContent = this.section.getElementsByClassName(
        "showcase-carousel-content"
      )[0] as HTMLDivElement;
      this.carouselSlides = this.carouselContent.getElementsByClassName(
        "showcase-carousel-content-slide"
      );
      this.controlsHandles = this.section.getElementsByClassName(
        "showcase-carousel-controls-handle"
      );
      this.controlsHandleTimers = this.section.getElementsByClassName(
        "showcase-carousel-controls-handle-timer"
      );

      // TODO: Check if this works nicely
      // this.carouselContent.addEventListener("click", () => {
      //   this.increaseIndex();
      // });

      this.initElementStates();
      this.initEventListeners();
      this.setIndex(0);

      this.timerTick();
    }

    timerTick() {
      return false;
      this.timer += 1000 / this.timerRefreshRate;

      if (this.timer > this.timerDuration) {
        this.timer = 0;
        this.increaseIndex();
      }

      this.updateActiveControlHandle();

      setTimeout(() => {
        this.timerTick();
      }, 1000 / this.timerRefreshRate);
    }

    initElementStates() {
      [].forEach.call(
        this.controlsHandleTimers,
        (handleTimer: HTMLElement) => (handleTimer.style.flexGrow = "0")
      );
      [].forEach.call(
        this.carouselSlides,
        (slide: HTMLElement, index: number) => {
          // Hide all but the first app screen
          if (index === 0) {
            slide.style.opacity = "1";
          } else {
            slide.style.opacity = "0";
          }
        }
      );
    }

    initEventListeners() {
      [].forEach.call(
        this.controlsHandles,
        (handle: HTMLElement, index: number) => {
          handle.addEventListener("click", () => {
            this.setIndex(index);
          });
        }
      );
    }

    increaseIndex() {
      if (typeof this.currentIndex === "undefined") return;

      if (this.currentIndex === this.controlsHandleTimers.length - 1) {
        this.setIndex(0);
      } else {
        this.setIndex(this.currentIndex + 1);
      }
    }

    setIndex(index: number) {
      this.timer = 0;
      this.currentIndex = index;
      this.updateControlsHandles();
      this.updateCarouselContent();
    }

    updateActiveControlHandle() {
      if (typeof this.currentIndex !== "undefined") {
        (this.controlsHandleTimers[
          this.currentIndex
        ] as HTMLDivElement).style.flexGrow = `${
          (1 / this.timerDuration) * this.timer
        }`;
      }
    }

    updateControlsHandles() {
      [].forEach.call(
        this.controlsHandles,
        (handle: HTMLElement, index: number) => {
          // Hide all but the handle with the current index
          if (index === this.currentIndex) {
            handle.style.opacity = "1";
            handle.style.height = "64px";
          } else {
            handle.style.opacity = "0.4";
            handle.style.height = "48px";
          }
        }
      );
    }

    updateCarouselContent() {
      [].forEach.call(
        this.carouselSlides,
        (slide: HTMLElement, index: number) => {
          // Hide all but the slide with the current index
          if (index === this.currentIndex) {
            slide.style.opacity = "1";
          } else {
            slide.style.opacity = "0";
          }
        }
      );
    }
  }

  (window as any).ShowcaseCarousel = ShowcaseCarousel;

  addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll(
      '[data-component="showcase-carousel"]'
    );

    for (let i = 0; i < carousels.length; ++i) {
      new ShowcaseCarousel(carousels[i] as HTMLDivElement);
    }
  });
})();
