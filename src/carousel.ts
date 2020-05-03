(() => {
  class Carousel {
    currentIndex?: number;

    section: HTMLElement;
    carouselContent: HTMLElement;
    controlsIndex: HTMLDivElement | null;
    controlsHandles: HTMLCollection;
    controlsHandleTimers: HTMLCollection;

    timer: number = 0;
    timerRefreshRate = 60;
    timerDuration = 5 * 1000;

    constructor(section: HTMLDivElement) {
      this.section = section;
      this.carouselContent = this.section.getElementsByClassName(
        "carousel-content"
      )[0] as HTMLDivElement;
      this.controlsIndex = this.section.getElementsByClassName(
        "carousel-controls-index"
      )[0] as HTMLDivElement;
      this.controlsHandles = this.section.getElementsByClassName(
        "carousel-controls-handle"
      );
      this.controlsHandleTimers = this.section.getElementsByClassName(
        "carousel-controls-handle-timer"
      );

      this.carouselContent.addEventListener('click', () => {
        this.increaseIndex();
      });

      this.initElementStates();
      this.initEventListeners();
      this.setIndex(0);

      this.timerTick();
    }

    timerTick() {
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
        (handleTimer: HTMLElement) => (handleTimer.style.width = "0%")
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
      this.updateControlsHandles(this.currentIndex, index);
      this.currentIndex = index;
      this.setControlsIndex(this.currentIndex);
      this.updateCarouselContent();
    }

    setControlsIndex(index: number) {
      if (!this.controlsIndex) return;
      this.controlsIndex.textContent = `0${index + 1}`;
    }

    updateActiveControlHandle() {
      if (typeof this.currentIndex !== "undefined") {
        (this.controlsHandleTimers[
          this.currentIndex
        ] as HTMLDivElement).style.width = `${
          (100 / this.timerDuration) * this.timer
        }%`;
      }
    }

    updateControlsHandles(prevIndex?: number, nextIndex?: number) {
      if (typeof prevIndex !== "undefined") {
        (this.controlsHandleTimers[prevIndex] as HTMLDivElement).style.width =
          "0%";
      }
      if (typeof nextIndex !== "undefined") {
        (this.controlsHandleTimers[nextIndex] as HTMLDivElement).style.width =
          "100%";
      }
    }

    updateCarouselContent() {
      if (!this.carouselContent) return;
      this.carouselContent.style.marginLeft = `-${this.currentIndex}00%`;
    }
  }

  const backgroundImagePosition = {
    desktop: [{ backgroundPositionX: 17, backgroundSize: "auto 250%" }],
    phone: {},
  };

  (window as any).Carousel = Carousel;

  addEventListener("DOMContentLoaded", () => {
    const carouselSection = document.getElementById(
      "carousel-section"
    ) as HTMLDivElement;

    if (carouselSection) {
      new Carousel(carouselSection);
    }

    const carousels = document.querySelectorAll('[data-component="carousel"]');

    for( let i = 0; i < carousels.length; ++i) {
      new Carousel(carousels[i] as HTMLDivElement);
    }

    // Inject SVG Icons
    const arrowRightWhiteElements = document.querySelectorAll(
      "[data-icon=arrow-right-white]"
    );
    [].forEach.call(arrowRightWhiteElements, (element: HTMLDivElement) => {
      element.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16"><path fill="currentColor" fill-rule="nonzero" d="M1.083 9.51l12.86-.006-4.052 4.061a1.054 1.054 0 0 0-.308.749c0 .282.11.549.308.747l.63.631c.198.198.463.308.744.308.282 0 .547-.109.745-.307l6.946-6.946c.2-.199.308-.464.307-.746.001-.284-.108-.549-.307-.748L12.01.307A1.046 1.046 0 0 0 11.265 0c-.281 0-.546.11-.744.307l-.63.631a1.043 1.043 0 0 0-.308.744c0 .282.11.532.308.73l4.098 4.084H1.069c-.581 0-1.069.5-1.069 1.08v.893c0 .58.502 1.042 1.083 1.042z" /></svg>';
    });
  });
})();
